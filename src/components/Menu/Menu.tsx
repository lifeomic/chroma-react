import { ConditionalWrapper } from '../_private/ConditionalWrapper';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { MenuItem, MenuItemProps } from './MenuItem';
import { motion, useReducedMotion } from 'framer-motion';
import { Portal } from 'reakit/Portal';
import { Text } from '../Text';
import {
  Menu as ReakitMenu,
  MenuButton,
  MenuItem as ReakitMenuItem,
  MenuInitialState,
  useMenuState,
} from 'reakit/Menu';
import clsx from 'clsx';
import * as React from 'react';
import 'focus-visible';
import { MenuGroupHeadingProps } from './MenuGroupHeading';
import zIndex from '../../styles/utils/zIndex';

export const MenuStylesKey = 'ChromaMenu';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.pxToRem(10),
      boxShadow: theme.boxShadows.popover,
      maxHeight: theme.pxToRem(432),
      minWidth: theme.pxToRem(224),
      overflowY: 'auto',
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      zIndex: zIndex.menu,
      '&:focus': {
        outline: 'none',
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisible,
      },
    },
    title: {
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
  }),
  { name: MenuStylesKey }
);

export type MenuClasses = GetClasses<typeof useStyles>;

export interface MenuProps
  extends Pick<MenuInitialState, 'placement' | 'gutter'> {
  ['aria-label']: string;
  anchorElement?: any;
  children?: React.ReactNode;
  className?: string;
  items?: Array<
    | React.ReactElement<MenuItemProps>
    | React.ReactElement<MenuGroupHeadingProps>
  >;
  title?: string;
  usePortal?: boolean;
}

const isMenuItemElement = (
  el:
    | React.ReactElement<MenuItemProps>
    | React.ReactElement<MenuGroupHeadingProps>
): el is React.ReactElement<MenuItemProps> => el.type === MenuItem;

/**
 * A component for rendering actionable options.
 *
 * ### Accessibility
 *
 * - The anchor element has `aria-expanded` and `aria-haspopup` set appropriately.
 * - The Menu and Menu Item components have the `role="menu"` and
 *   `role="menuitem"`.
 * - Pressing `Enter` on the focused anchor element expands the menu.
 * - Pressing `Escape` closes the expanded menu and returns focus to the anchor
 *   element.
 * - Pressing `up` or `down` arrow keys navigates between the Menu Items.
 * - Pressing `Enter` on a Menu Item "clicks" it.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Menu/Menu.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Menu/Menu.stories.tsx)
 */
export const Menu: React.FC<MenuProps> = ({
  'aria-label': ariaLabel,
  anchorElement,
  children,
  className,
  gutter,
  items,
  placement = 'bottom',
  title,
  usePortal = false,
  ...rootProps
}) => {
  const classes = useStyles({});

  const shouldReduceMotion = useReducedMotion();

  const menu = useMenuState({ placement, gutter });

  const handleStopPropagation = (e: React.SyntheticEvent) =>
    e.stopPropagation();

  return (
    <>
      <MenuButton
        {...menu}
        {...anchorElement.props}
        onClick={handleStopPropagation}
      >
        {(disclosureProps) =>
          React.cloneElement(
            React.Children.only(anchorElement),
            disclosureProps
          )
        }
      </MenuButton>
      <ConditionalWrapper
        condition={usePortal}
        wrapper={(children: React.ReactNode) => <Portal>{children}</Portal>}
      >
        <ReakitMenu
          {...menu}
          as={motion.div}
          aria-label={ariaLabel}
          className={clsx(classes.root, className)}
          animate={
            menu.visible
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
          {items &&
            items.map((item, i) =>
              isMenuItemElement(item) ? (
                <ReakitMenuItem
                  {...menu}
                  {...item.props}
                  key={`item-${i}`}
                  onClick={(e: any) => {
                    menu.hide();
                    item.props.onClick && item.props.onClick(e);
                  }}
                >
                  {(itemProps: MenuItemProps | MenuGroupHeadingProps) =>
                    React.cloneElement(React.Children.only(item), itemProps)
                  }
                </ReakitMenuItem>
              ) : (
                item
              )
            )}
        </ReakitMenu>
      </ConditionalWrapper>
    </>
  );
};
