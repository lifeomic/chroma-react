import {
  ArrowLeftCircle as FeatherArrowLeftCircle,
  Props,
} from 'react-feather';
import * as React from 'react';

export const ArrowLeftCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowLeftCircle data-icon="arrowleftcircle" {...rootProps} />
);
