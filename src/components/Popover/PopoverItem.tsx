import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses, StandardProps } from '../../typeUtils';
import { Text } from '../Text';

export const PopoverItemStylesKey = 'ChromaPopoverItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1.25, 2.5),
      transition: 'background 0.25s ease, opacity 0.25s ease',
      '&:focus': {
        outline: 'none',
      },
    },
    hoverPointer: {
      '&:hover, &:focus': {
        backgroundColor: theme.hexToRgba(theme.palette.primary[50], 0.6),
        cursor: 'pointer',
      },
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    text: {
      letterSpacing: 0.25,
    },
    clipText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    textNoWrap: {
      whiteSpace: 'nowrap',
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    directionRow: {
      flexDirection: 'row',
    },
    directionRowReverse: {
      flexDirection: 'row-reverse',
    },
  }),
  { name: PopoverItemStylesKey }
);

export type PopoverItemClasses = GetClasses<typeof useStyles>;

export interface PopoverItemOwnProps
  extends StandardProps<HTMLLIElement, PopoverItemClasses> {
  children?: React.ReactNode;
  clipText?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text?: string;
  justify?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
  direction?: 'row' | 'row-reverse';
  noTextWrap?: boolean;
}

export interface PopoverItemProps extends PopoverItemOwnProps {}

export const PopoverItem = React.forwardRef<HTMLLIElement, PopoverItemProps>(
  (
    {
      className,
      clipText,
      children,
      direction = 'row',
      icon: Icon,
      justify = 'flex-start',
      noTextWrap = false,
      onClick,
      text,
      classes: additionalClasses,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });

    return (
      <li
        ref={ref}
        className={clsx(
          classes.root,
          onClick && classes.hoverPointer,
          {
            [classes.justifyCenter]: justify === 'center',
            [classes.justifyBetween]: justify === 'space-between',
            [classes.justifyStart]: justify === 'flex-start',
            [classes.justifyEnd]: justify === 'flex-end',
          },
          {
            [classes.directionRow]: direction === 'row',
            [classes.directionRowReverse]: direction === 'row-reverse',
          },
          className
        )}
        role="button"
        onClick={onClick}
        tabIndex={0}
        {...rootProps}
      >
        {!!Icon && (
          <Icon
            role="img"
            aria-hidden
            className={classes.icon}
            width={18}
            height={18}
          />
        )}
        {!!text && (
          <Text
            className={clsx(
              classes.text,
              noTextWrap && classes.textNoWrap,
              clipText && classes.clipText
            )}
          >
            {text}
          </Text>
        )}
        {children}
      </li>
    );
  }
);
