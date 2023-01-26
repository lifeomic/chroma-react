import clsx, { ClassValue } from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

export const DotLoaderStylesKey = 'ChromaDotLoader';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      height: theme.pxToRem(100),
      width: theme.pxToRem(100),
    },
    size0: {
      height: theme.pxToRem(25),
      width: theme.pxToRem(25),
    },
    size1: {
      height: theme.pxToRem(50),
      width: theme.pxToRem(50),
    },
    '@keyframes bounce': {
      '0%': {
        transform: 'translate3d(0, 0, 0)',
      },
      '50%': {
        transform: 'translate3d(0, 1rem, 0)',
      },
      '100%': {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    bounce1: {
      animation: '$bounce 1s 0s infinite',
      fill: theme.palette.red.main,
    },
    bounce2: {
      animation: '$bounce 1s 0.2s infinite',
      fill: '#F7C44D',
    },
    bounce3: {
      animation: '$bounce 1s 0.4s infinite',
      fill: '#09BEEF',
    },
    bounce4: {
      animation: '$bounce 1s 0.6s infinite',
      fill: theme.palette.green.light,
    },
  }),
  { name: DotLoaderStylesKey }
);

export type DotLoaderClasses = GetClasses<typeof useStyles>;

export interface DotLoaderProps
  extends Omit<
      React.ComponentPropsWithoutRef<'svg'>,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    >,
    MotionProps {
  size?: 0 | 1;
  dotStyle?: ClassValue;
}

/**
 * A Dot Loader provides a visual cue that an action is processing or page is loading.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/DotLoader/DotLoader.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/DotLoader/DotLoader.stories.tsx)
 */

export const DotLoader: React.FunctionComponent<DotLoaderProps> = ({
  size,
  dotStyle,
  ...rootProps
}) => {
  const { classes } = useStyles();

  return (
    <AnimatePresence>
      <motion.svg
        role="progressbar"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 72 78"
        className={clsx(classes.root, {
          [classes.size0]: size === 0,
          [classes.size1]: size === 1,
        })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        {...rootProps}
      >
        <circle
          stroke="none"
          cx="6"
          cy="28"
          r="6"
          className={clsx(classes.bounce1, dotStyle)}
        />
        <circle
          stroke="none"
          cx="26"
          cy="28"
          r="6"
          className={clsx(classes.bounce2, dotStyle)}
        />
        <circle
          stroke="none"
          cx="46"
          cy="28"
          r="6"
          className={clsx(classes.bounce3, dotStyle)}
        />
        <circle
          stroke="none"
          cx="66"
          cy="28"
          r="6"
          className={clsx(classes.bounce4, dotStyle)}
        />
      </motion.svg>
    </AnimatePresence>
  );
};
