import { Coffee as FeatherCoffee, Props } from 'react-feather';
import * as React from 'react';

export const Coffee: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCoffee data-icon="coffee" {...rootProps} />
);
