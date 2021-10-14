import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const SkeletonStylesKey = 'ChromaSkeleton';

export const useStyles = makeStyles(
  (theme) => ({
    '@keyframes pulse': {
      '0%': {
        opacity: 1,
      },
      '50%': {
        opacity: 0.4,
      },
      '100%': {
        opacity: 1,
      },
    },
    '@keyframes shine': {
      '0%': {
        transform: 'translateX(-100%)',
      },
      '50%': {
        transform: 'translateX(100%)',
      },
      '100%': {
        transform: 'translateX(100%)',
      },
    },
    root: {
      backgroundColor: theme.palette.graphite[200],
    },
    pulseAnimation: {
      animation: '$pulse 1.5s ease-in-out 0.5s infinite',
    },
    shineAnimation: {
      overflow: 'hidden',
      position: 'relative',

      '&::after': {
        animation: '$shine 1.6s linear 0.5s infinite',
        background: `linear-gradient(90deg, transparent, rgba(230, 231, 237, 0.4), transparent)`, // graphite[200] with opacity
        bottom: 0,
        content: `''`,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translateX(-100%)',
      },
    },
    noAnimation: {},
    circle: {
      borderRadius: '50%',
    },
    rectangle: {
      borderRadius: theme.shape.borderRadius,
    },
  }),
  { name: SkeletonStylesKey }
);

export interface SkeletonOwnProps {
  animation?: 'pulse' | 'shine' | 'none';
  className?: string;
  height: number | string;
  variant?: 'circle' | 'rectangle';
  width: number | string;
}

export type SkeletonClasses = GetClasses<typeof useStyles>;

export interface SkeletonProps extends SkeletonOwnProps {}

export const Skeleton: React.FC<SkeletonProps> = ({
  animation = 'pulse',
  className,
  height,
  variant = 'rectangle',
  width,
  ...rootProps
}) => {
  const classes = useStyles({});

  return (
    <span
      aria-busy
      className={clsx(
        classes.root,
        {
          [classes.pulseAnimation]: animation === 'pulse',
          [classes.shineAnimation]: animation === 'shine',
          [classes.noAnimation]: animation === 'none',
        },
        {
          [classes.circle]: variant === 'circle',
          [classes.rectangle]: variant === 'rectangle',
        },
        className
      )}
      style={{ height, width }}
      {...rootProps}
    />
  );
};
