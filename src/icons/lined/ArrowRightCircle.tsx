import {
  ArrowRightCircle as FeatherArrowRightCircle,
  Props,
} from 'react-feather';
import * as React from 'react';

export const ArrowRightCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowRightCircle data-icon="arrowrightcircle" {...rootProps} />
);
