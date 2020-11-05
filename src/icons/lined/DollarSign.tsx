import { DollarSign as FeatherDollarSign, Props } from 'react-feather';
import * as React from 'react';

export const DollarSign: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDollarSign data-icon="dollarsign" {...rootProps} />
);
