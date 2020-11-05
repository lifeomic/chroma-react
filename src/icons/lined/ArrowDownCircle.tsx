import {
  ArrowDownCircle as FeatherArrowDownCircle,
  Props,
} from 'react-feather';
import * as React from 'react';

export const ArrowDownCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowDownCircle data-icon="arrowdowncircle" {...rootProps} />
);
