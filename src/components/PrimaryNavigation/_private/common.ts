import { TargetAndTransition } from 'framer-motion';

export const inDuration = 0.25;
export const outDuration = 0.15;

export const inDurationSecondary = 0.35;
export const outDurationSecondary = 0.35;
export const delaySecondary = 0.225;

export const BETA_INITIAL_TRANSITION = {
  opacity: 0,
};

export const BETA_ANIMATE_TRANSITION: TargetAndTransition = {
  opacity: 1,
  transition: {
    duration: inDurationSecondary,
    delay: delaySecondary,
  },
};

export const BETA_EXIT_TRANSITION: TargetAndTransition = {
  opacity: 1,
  transition: {
    duration: outDurationSecondary,
    delay: delaySecondary,
  },
};

export const PLUS_INITIAL_TRANSITION = {
  opacity: 0,
};

export const PLUS_ANIMATE_TRANSITION: TargetAndTransition = {
  opacity: 1,
  transition: {
    duration: inDurationSecondary,
    delay: delaySecondary,
  },
};

export const PLUS_EXIT_TRANSITION: TargetAndTransition = {
  opacity: 0,
  transition: {
    duration: outDurationSecondary,
    delay: delaySecondary,
  },
};
