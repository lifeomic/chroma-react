import { ConditionalWrapper } from '../_private/ConditionalWrapper';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { MenuItemProps } from './MenuItem';
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

export const MenuStylesKey = 'ChromaMenu';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.pxToRem(10),
      boxShadow: theme.boxShadows.popover,
      maxHeight: theme.pxToRem(432),
      minWidth: theme.pxToRem(224),
      overflowY: 'auto',
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      zIndex: 40,
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
  items?: Array<React.ReactElement<MenuItemProps>>;
  title?: string;
  usePortal?: boolean;
}

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
            items.map((item, i) => (
              <ReakitMenuItem
                {...menu}
                key={i}
                onClick={(e: any) => {
                  menu.hide();
                  item.props.onClick && item.props.onClick(e);
                }}
              >
                {(itemProps) =>
                  React.cloneElement(React.Children.only(item), itemProps)
                }
              </ReakitMenuItem>
            ))}
        </ReakitMenu>
      </ConditionalWrapper>
    </>
  );
};
