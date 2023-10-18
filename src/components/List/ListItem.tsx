import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { AvatarProps } from '../Avatar';
import { Box } from '../Box';

export const ListItemStylesKey = 'ChromaListItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: 0,
      width: '100%',
    },
    item: {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      gap: theme.spacing(1),
      letterSpacing: '0.015625em',
      margin: 0,
      outline: 'none',
      overflow: 'hidden',
      padding: theme.spacing(1, 0),
      textAlign: 'left',
      userSelect: 'none',
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
    },
    buttonItem: {
      '&:focus, &:hover': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },

      '&:disabled, &[disabled]': {
        '&, & *': {
          color: theme.palette.text.disabled,
        },
      },
    },
    readonlyItem: {
      cursor: 'default',

      '&:focus.focus-visible': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },
    },
    avatar: {
      alignSelf: 'flex-start',
    },
    icon: {
      alignSelf: 'flex-start',
      minWidth: theme.pxToRem(18),
    },
    trailingIcon: {
      marginRight: 0,
      marginLeft: 'auto',
    },
    text: {
      lineHeight: 1.35,
    },
    secondaryText: {
      color: theme.palette.text.secondary,
      fontSize: theme.pxToRem(12),
    },
  }),
  { name: ListItemStylesKey }
);

export type ListItemClasses = GetClasses<typeof useStyles>;

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  avatar?: React.ReactElement<AvatarProps>;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  onClick?: any;
  secondaryText?: string;
  text?: string;
  trailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  trailingIconClassName?: string;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      avatar,
      className,
      children,
      disabled,
      icon: Icon,
      iconClassName,
      onClick,
      secondaryText,
      text,
      trailingIcon: TrailingIcon,
      trailingIconClassName,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    const Tag = !!onClick ? 'button' : 'div';

    return (
      <li className={classes.root} ref={ref} {...rootProps}>
        <Tag
          className={clsx(
            classes.item,
            !!onClick ? classes.buttonItem : classes.readonlyItem,
            className
          )}
          disabled={disabled}
          onClick={onClick}
        >
          {!!Icon && !avatar && (
            <Icon
              role="img"
              aria-hidden
              className={clsx(classes.icon, iconClassName)}
              width={18}
              height={18}
            />
          )}

          {!!avatar &&
            !Icon &&
            React.cloneElement(React.Children.only(avatar), {
              className: classes.avatar,
              size: 0,
            })}

          <Box direction="column" align="flex-start" gap={0.25}>
            {!!text && <Box className={classes.text}>{text}</Box>}
            <Box className={classes.text}>{children}</Box>
            {!!secondaryText && (
              <Box className={classes.secondaryText}>{secondaryText}</Box>
            )}
          </Box>

          {!!TrailingIcon && (
            <TrailingIcon
              role="img"
              aria-hidden
              className={clsx(
                classes.icon,
                classes.trailingIcon,
                trailingIconClassName
              )}
              width={18}
              height={18}
            />
          )}
        </Tag>
      </li>
    );
  }
);
