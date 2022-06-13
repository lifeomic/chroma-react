import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { motion, MotionProps } from 'framer-motion';

export const PillStylesKey = 'ChromaPill';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      background: theme.palette.black[500],
      color: theme.palette.common.white,
      borderRadius: theme.pxToRem(20),
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0.5, 1.5),
      width: 'fit-content',
      maxHeight: theme.pxToRem(25),
    },
    default: {},
    primaryColor: {
      background: theme.palette.primary.main,
    },
    negative: {
      background: theme.palette.negative.main,
    },
    positive: {
      background: theme.palette.positive.main,
    },
    highlight: {
      background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 40%, rgb(166, 66, 254) 92%)`,
      boxShadow: theme.boxShadows.table,
      borderRadius: theme.spacing(0.25, 1),
      borderBottom: 'solid 1px rgba(0, 83, 154, 0.75)',
      borderRight: 'solid 1px rgba(0, 83, 154, 0.75)',
      color: theme.palette.common.white,
      fontSize: theme.pxToRem(9),
      fontWeight: theme.typography.fontWeightBolder,
      height: theme.pxToRem(20),
      justifyContent: 'center',
      letterSpacing: theme.pxToRem(1.6),
      lineHeight: 0.9,
      padding: theme.spacing(0.125, 0.75, 0),
      textIndent: theme.pxToRem(3),
      textTransform: 'uppercase',
    },
  }),
  { name: PillStylesKey }
);

export interface PillOwnProps
  extends Omit<
      React.ComponentPropsWithoutRef<'span'>,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    >,
    MotionProps {
  color?: 'default' | 'primary' | 'negative' | 'positive';
  children?: React.ReactNode;
  label?: string;
  variant?: 'default' | 'highlight';
}

export type PillClasses = GetClasses<typeof useStyles>;

export interface PillProps extends PillOwnProps {}

export const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  (
    { children, className, color, label, variant = 'default', ...rootProps },
    ref
  ) => {
    const classes = useStyles({});

    return (
      <motion.span
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.default]: variant === 'default',
            [classes.highlight]: variant === 'highlight',
          },
          {
            [classes.primaryColor]: color === 'primary',
            [classes.negative]: color === 'negative',
            [classes.positive]: color === 'positive',
          },
          className
        )}
        {...rootProps}
      >
        {label}
        {children}
      </motion.span>
    );
  }
);
