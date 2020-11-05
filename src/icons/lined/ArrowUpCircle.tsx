import { ArrowUpCircle as FeatherArrowUpCircle, Props } from 'react-feather';
import * as React from 'react';

export const ArrowUpCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowUpCircle data-icon="arrowupcircle" {...rootProps} />
);
