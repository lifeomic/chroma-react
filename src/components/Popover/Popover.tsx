import { ConditionalWrapper } from '../_private/ConditionalWrapper';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { motion, useReducedMotion } from 'framer-motion';
import { Portal } from 'reakit/Portal';
import { Text } from '../Text';
import {
  Popover as ReakitPopover,
  PopoverDisclosure,
  PopoverInitialState,
  PopoverStateReturn,
  usePopoverState,
} from 'reakit/Popover';
import clsx from 'clsx';
import * as React from 'react';
import zIndex from '../../styles/utils/zIndex';

export const PopoverStylesKey = 'ChromaPopover';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      borderRadius: theme.pxToRem(10),
      boxShadow: theme.boxShadows.popover,
      minWidth: theme.pxToRem(224),
      overflow: 'hidden',
      zIndex: zIndex.popover,
      '&:focus': {
        outline: 'none',
      },
    },
    title: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
  }),
  { name: PopoverStylesKey }
);

export type PopoverClasses = GetClasses<typeof useStyles>;

export interface PopoverRenderProps {
  popover: PopoverStateReturn;
}

export interface PopoverProps
  extends Pick<
    PopoverInitialState,
    'placement' | 'gutter' | 'unstable_offset'
  > {
  ['aria-label']: string;
  anchorElement?: any;
  children?: React.ReactNode | any;
  className?: string;
  title?: string;
  usePortal?: boolean;
}

/**
 * A popover element, anchored to another element. Typically provides additional or
 * actionable information to the anchor element. Popovers with specific selection
 * items should use `Menu` instead.
 *
 * ### Accessibility
 *
 * - The anchor element has `aria-controls` and `aria-haspopup="dialog"`.
 * - The content contains `role="dialog"` and `data-dialog="true"`.
 * - Pressing `Enter` on the focused anchor element expands the menu.
 * - Pressing `Escape` closes the expanded menu and returns focus to the anchor
 *   element.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Popover/Popover.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Popover/Popover.stories.tsx)
 */
export const Popover: React.FC<PopoverProps> = ({
  'aria-label': ariaLabel,
  anchorElement,
  children,
  className,
  gutter,
  placement = 'bottom',
  title,
  usePortal = false,
  unstable_offset,
  ...rootProps
}) => {
  const classes = useStyles({});

  const shouldReduceMotion = useReducedMotion();

  const popover = usePopoverState({ placement, gutter, unstable_offset });

  return (
    <>
      <PopoverDisclosure {...popover} {...anchorElement.props}>
        {(disclosureProps) =>
          React.cloneElement(
            React.Children.only(anchorElement),
            disclosureProps
          )
        }
      </PopoverDisclosure>
      <ConditionalWrapper
        condition={usePortal}
        wrapper={(children: React.ReactNode) => <Portal>{children}</Portal>}
      >
        <ReakitPopover
          {...popover}
          aria-label={ariaLabel}
          as={motion.div}
          className={clsx(classes.root, className)}
          aria-hidden={popover.visible ? undefined : 'true'}
          animate={
            popover.visible
              ? shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }
              : shouldReduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  transition: { duration: 0.1 },
                }
          }
          {...rootProps}
        >
          {!!title && (
            <Text className={classes.title} weight="bold" size="subbody">
              {title}
            </Text>
          )}
          {typeof children === 'function'
            ? children({ popover } as PopoverRenderProps)
            : children}
        </ReakitPopover>
      </ConditionalWrapper>
    </>
  );
};
