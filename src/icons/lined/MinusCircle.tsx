import { MinusCircle as FeatherMinusCircle, Props } from 'react-feather';
import * as React from 'react';

export const MinusCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMinusCircle data-icon="minuscircle" {...rootProps} />
);
