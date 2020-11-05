import { ArrowUpRight as FeatherArrowUpRight, Props } from 'react-feather';
import * as React from 'react';

export const ArrowUpRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowUpRight data-icon="arrowupright" {...rootProps} />
);
