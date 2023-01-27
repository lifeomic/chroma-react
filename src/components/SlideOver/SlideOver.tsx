import { GetClasses } from '../../typeUtils';
import { newMakeStyles } from '../../styles';
import { RemoveScroll } from 'react-remove-scroll';
import * as React from 'react';
import clsx from 'clsx';

export const SlideOverStylesKey = 'ChromaSlideOver';

export const useStyles = newMakeStyles({ name: SlideOverStylesKey })(
  (theme) => ({
    '@keyframes fade-in': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    '@keyframes fade-out': {
      '0%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0,
      },
    },
    '@keyframes slide-in': {
      '0%': {
        width: 0,
        maxWidth: 0,
      },
      '100%': {
        maxWidth: '100%',
        width: 'var(--slideover-width)',
      },
    },
    '@keyframes slide-out': {
      '0%': {
        maxWidth: '100%',
        width: 'var(--slideover-width)',
      },
      '100%': {
        width: 0,
        maxWidth: 0,
      },
    },
    root: {
      '--slideover-width': '28rem',
      backgroundColor: theme.palette.common.white,
      bottom: 0,
      display: 'flex',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: theme.zIndex.slideOver,
      boxShadow: theme.boxShadows.elevatedContent,
      animation: '$slide-in 0.25s ease-in-out',
      transform: 'translate3d(0, 0, 0)',
      '@media (prefers-reduced-motion)': {
        animation: '$slide-in 0.1s ease-in-out',
      },
    },
    transitionClose: {
      animation: '$slide-out 0.2s ease-in-out',
      '@media (prefers-reduced-motion)': {
        animation: '$slide-out 0.1s ease-in-out',
      },
    },
    fadeInAnimation: {
      animation: '$fade-in 1s',
    },
    fadeOutAnimation: {
      animation: '$fade-out 0.15s',
    },
    inner: {
      maxWidth: 'var(--slideover-width)',
      position: 'relative',
      width: '100vw',
    },
    content: {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'auto',
    },
  })
);

export type SlideOverClasses = GetClasses<typeof useStyles>;

export interface SlideOverProps {
  className?: string;
  classes?: {
    root?: string;
    inner?: string;
    content?: string;
  };
  children?: React.ReactNode;
  isOpen?: boolean;
}

/**
 * Slide Overs are used to display content that is hidden until toggled open.
 *
 * **NOTE:** The parent must have `position: relative` for this to work properly.
 *
 * **NOTE:** This component locks the body from scrolling by design, so that users
 * can scroll the Slide Over panel.
 *
 * ### Accessibility
 *
 * - The SlideOver locks scroll when open.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SlideOver/SlideOver.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SlideOver/SlideOver.stories.tsx)
 */
export const SlideOver: React.FC<SlideOverProps> = ({
  classes: additionalClasses,
  className,
  children,
  isOpen = false,
  ...rootProps
}) => {
  const { classes } = useStyles();

  // If the two below states get more complicated, may want to move to a
  // useReducer.

  // We use a local state open variable so we can ensure
  // that the keyframe animations finish before we remove the element
  // from the DOM
  const [localIsOpen, setLocalIsOpen] = React.useState<boolean>(isOpen);

  // This is another state variable we use to apply the "slide-out" keyframes
  // and then we leverage the `onAnimationEnd` to know when it's safe to
  // remove this element from the DOM
  const [isTransitioningClosed, setIsTransitioningClosed] = React.useState<
    boolean
  >(false);

  React.useEffect(() => {
    if (localIsOpen === false && isOpen === true) {
      setLocalIsOpen(true);
      setIsTransitioningClosed(false);
      return;
    }

    if (localIsOpen === true && isOpen == false) {
      setIsTransitioningClosed(true);
    }
  }, [isOpen, localIsOpen]);

  if (localIsOpen === false) {
    return null;
  }

  return (
    <RemoveScroll forwardProps>
      <section
        className={clsx(
          classes.root,
          additionalClasses?.root,
          isTransitioningClosed && classes.transitionClose,
          className
        )}
        onAnimationEnd={() => {
          if (localIsOpen && isTransitioningClosed) {
            setLocalIsOpen(false);
          }
        }}
        {...rootProps}
      >
        <div className={clsx(classes.inner, additionalClasses?.inner)}>
          <div
            className={clsx(
              classes.content,
              classes.fadeInAnimation,
              isTransitioningClosed && classes.fadeOutAnimation,
              additionalClasses?.content
            )}
          >
            {children}
          </div>
        </div>
      </section>
    </RemoveScroll>
  );
};
