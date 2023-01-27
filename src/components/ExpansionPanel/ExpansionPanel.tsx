import clsx from 'clsx';
import * as React from 'react';
import { Plus } from '@lifeomic/chromicons';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { generateUniqueId } from '../_private/UniqueId';
import { Text } from '../Text';

export const ExpansionPanelStylesKey = 'ChromaExpansionPanel';

export const useStyles = newMakeStyles({ name: ExpansionPanelStylesKey })(
  (theme) => ({
    root: {
      width: '100%',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    rootOpen: {
      maxHeight: 'inherit',
    },
    button: {
      width: '100%',
      background: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'left',
      border: 'none',
      outline: 'none',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1.25),
      paddingBottom: theme.spacing(1.25),
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      },
      '&:hover > p, &:focus > p': {
        color: theme.palette.black.main,
        transform: 'translate3d(2px, 0, 0)',
      },
    },
    buttonShadow: {
      boxShadow: theme.boxShadows.table,
    },
    leadingIcon: {
      marginRight: theme.spacing(1),
    },
    titleContainer: {
      alignItems: 'center',
      display: 'flex',
      width: '100%',
    },
    title: {
      color: theme.palette.text.secondary,
      letterSpacing: 'initial',
      transition: 'color 0.5s ease, transform 0.5s ease',
    },
    icon: {
      transition: 'transform 0.25s ease',
      color: theme.palette.primary.main,
    },
    rotate: {
      transform: 'rotate(45deg)',
    },
    content: {
      maxHeight: 0,
      overflow: 'hidden',
      transition: 'max-height 0.25s ease-in-out',
    },
    inner: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.common.white,
      padding: theme.spacing(2),
      width: '100%',
      height: '100%',
      visibility: 'visible',
    },
    directionRow: {
      flexDirection: 'row',
    },
    innerHidden: {
      visibility: 'hidden',
    },
  })
);

export type ExpansionPanelClasses = GetClasses<typeof useStyles>;

export interface ExpansionPanelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  ref?: React.Ref<HTMLDivElement>;
  ariaOwnsId?: string;
  children?: React.ReactNode;
  contentClassName?: string;
  innerContentClassName?: string;
  title: string;
  leadingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onToggle?: (isExpanded: boolean) => void;
  isOpen?: boolean;
  contentDirection?: 'row' | 'column';
}

/**
 * Panel component for expanding/collapsing content.
 *
 * ### Accessibility
 *
 * - The click target is a `button` element.
 *   - Pressing `Tab` will set focus to the element
 *   - Pressing `Space` or `Enter` triggers the click action.
 * - It leverages `aria-expanded` on the root button element.
 * - It leverages `aria-owns` to define the expanded content.
 * - It leverages `aria-hidden` on the content that expands/collapses.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ExpansionPanel/ExpansionPanel.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ExpansionPanel/ExpansionPanel.stories.tsx)
 */
export const ExpansionPanel = React.forwardRef<
  HTMLDivElement,
  ExpansionPanelProps
>(
  (
    {
      ariaOwnsId,
      children,
      className,
      contentClassName,
      innerContentClassName,
      onToggle,
      isOpen = false,
      contentDirection = 'column',
      title,
      leadingIcon: LeadingIcon,
      ...rootProps
    },
    ref
  ) => {
    const { classes } = useStyles();
    const [isExpanded, setIsExpanded] = React.useState(isOpen);

    const innerRef = React.useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = React.useState<number>(0);

    const [ariaId] = React.useState<string>(
      () => ariaOwnsId || generateUniqueId('exppanel-')
    );

    // Watch for `isOpen` changes
    React.useEffect(() => {
      setIsExpanded(isOpen);
    }, [isOpen]);

    // TODO: Look into https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
    //
    // Determine the size of our content so we can expand/collapse
    // accordingly.  If the children are dynamically generated, we should
    // re-evaluate our size in case additional content is added/removed
    React.useEffect(() => {
      if (innerRef && innerRef.current && children) {
        setContentHeight(innerRef.current.scrollHeight + 25);
      }
    }, [children, innerRef?.current?.scrollHeight]);

    const handleClick = React.useCallback(
      (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const newState = !isExpanded;
        if (typeof onToggle === 'function') {
          onToggle(newState);
        }

        setIsExpanded(newState);
      },
      [isExpanded, onToggle]
    );

    return (
      <div
        className={clsx(
          classes.root,
          isExpanded && classes.rootOpen,
          className
        )}
        ref={ref}
        {...rootProps}
      >
        <button
          aria-expanded={isExpanded}
          aria-owns={ariaId}
          className={clsx(classes.button, isExpanded && classes.buttonShadow)}
          onClick={handleClick}
          tabIndex={0}
        >
          <div className={classes.titleContainer}>
            {LeadingIcon && (
              <LeadingIcon
                role="img"
                aria-hidden
                className={classes.leadingIcon}
                width={18}
                height={18}
              />
            )}
            <Text className={classes.title} size="subbody" weight="bold">
              {title}
            </Text>
          </div>

          <Plus
            className={clsx(classes.icon, isExpanded && classes.rotate)}
            aria-hidden="true"
            width={18}
            height={18}
          />
        </button>
        <div
          aria-hidden={!isExpanded}
          id={ariaId}
          className={clsx(classes.content, contentClassName)}
          style={{ maxHeight: isExpanded ? contentHeight : 0 }}
        >
          <div
            ref={innerRef}
            className={clsx(
              classes.inner,
              innerContentClassName,
              {
                [classes.directionRow]: contentDirection === 'row',
              },
              !isExpanded && classes.innerHidden
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default ExpansionPanel;
