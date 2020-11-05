import { ArrowUpLeft as FeatherArrowUpLeft, Props } from 'react-feather';
import * as React from 'react';

export const ArrowUpLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowUpLeft data-icon="arrowupleft" {...rootProps} />
);
