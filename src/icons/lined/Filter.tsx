import { Filter as FeatherFilter, Props } from 'react-feather';
import * as React from 'react';

export const Filter: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFilter data-icon="filter" {...rootProps} />
);
