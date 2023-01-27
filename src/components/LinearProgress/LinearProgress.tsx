import { GetClasses } from '../../typeUtils';
import { newMakeStyles } from '../../styles';
import { useReducedMotion } from 'framer-motion';
import * as React from 'react';
import clsx from 'clsx';

export const LinearProgressStylesKey = 'ChromaLinearProgress';

export const useStyles = newMakeStyles({ name: LinearProgressStylesKey })(
  (theme) => ({
    root: {
      '--linear-progress-height': '0.25rem',
      '--linear-progress-background-color': theme.palette.black[100],
      '--linear-progress-bar-color': `linear-gradient(135deg,
        ${theme.palette.primary.light} 0%,
        ${theme.palette.primary.main} 22%,
        ${theme.palette.purple[700]} 92%)`,
      backgroundColor: 'var(--linear-progress-background-color)',
      height: 'var(--linear-progress-height)',
      overflow: 'hidden',
      position: 'relative',
    },
    bar: {
      background: 'var(--linear-progress-bar-color)',
      bottom: 0,
      height: 'var(--linear-progress-height)',
      left: 0,
      position: 'absolute',
      top: 0,
      transition: 'transform 0.4s linear',
      width: '100%',
    },
    indeterminate: {
      animation:
        '$chroma-progress-bar-indeterminate 2s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
    },
    indeterminateReduced: {
      animation:
        '$chroma-progress-bar-indeterminate 10s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
    },
    '@keyframes chroma-progress-bar-indeterminate': {
      '0%': {
        left: '-100%',
        right: '100%',
      },
      '60%': {
        left: '50%',
        right: '-50%',
      },
      '100%': {
        left: '100%',
        right: '-100%',
      },
    },
  })
);

export type LinearProgressClasses = GetClasses<typeof useStyles>;

export interface LinearProgressProps {
  className?: string;
  value?: number;
  variant?: 'determinate' | 'indeterminate';
}

/**
 * A linear progress component for showing loading states.
 *
 * ### Accessibility
 *
 * - The component has the `progressbar` role.
 * - The component specifices the `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/LinearProgress/LinearProgress.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/LinearProgress/LinearProgress.stories.tsx)
 */
export const LinearProgress: React.FC<LinearProgressProps> = ({
  className,
  variant = 'determinate',
  value = 0,
  ...rootProps
}) => {
  const { classes } = useStyles();

  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={clsx(classes.root, className)}
      role="progressbar"
      aria-valuenow={variant === 'determinate' ? value : undefined}
      aria-valuemin={variant === 'determinate' ? 0 : undefined}
      aria-valuemax={variant === 'determinate' ? 100 : undefined}
      {...rootProps}
    >
      <div
        className={clsx(
          classes.bar,
          variant === 'indeterminate' && classes.indeterminate,
          shouldReduceMotion && classes.indeterminateReduced
        )}
        style={
          variant === 'determinate'
            ? { transform: `translateX(-${100 - value}%)` }
            : undefined
        }
      />
    </div>
  );
};
