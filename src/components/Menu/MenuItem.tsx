import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';

export const MenuItemStylesKey = 'ChromaMenuItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      letterSpacing: '0.015625em',
      margin: 0,
      outline: 'none',
      overflow: 'hidden',
      padding: theme.spacing(1, 2),
      textAlign: 'left',
      userSelect: 'none',
      width: '100%',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },
      '&:focus': {
        outline: 'none',
      },
      '&:disabled, &[disabled]': {
        '&, & *': {
          color: theme.palette.text.disabled,
        },
      },
    },
    icon: {
      alignSelf: 'flex-start',
      marginRight: theme.spacing(1),
      minWidth: theme.pxToRem(18),
    },
    text: {
      lineHeight: 1.35,
    },
    secondaryText: {
      color: theme.palette.text.secondary,
      fontSize: theme.pxToRem(12),
    },
    negative: {
      color: theme.palette.negative.main,
    },
    positive: {
      color: theme.palette.positive.main,
    },
  }),
  { name: MenuItemStylesKey }
);

export type MenuItemClasses = GetClasses<typeof useStyles>;

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  color?: 'default' | 'negative' | 'positive' | undefined;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text?: string;
  secondaryText?: string;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className,
      children,
      color = 'default',
      icon: Icon,
      onClick,
      text,
      secondaryText,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    const handleStopPropagation = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();
      onClick && onClick(e);
    };

    return (
      <button
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.negative]: color === 'negative',
            [classes.positive]: color === 'positive',
          },
          className
        )}
        onClick={handleStopPropagation}
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
        <Box direction="column" align="flex-start" gap={0.25}>
          <Box className={classes.text}>{!!text && text}</Box>
          <Box className={classes.secondaryText}>
            {!!secondaryText && secondaryText}
          </Box>
        </Box>
        {children}
      </button>
    );
  }
);
