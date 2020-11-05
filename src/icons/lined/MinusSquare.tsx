import { MinusSquare as FeatherMinusSquare, Props } from 'react-feather';
import * as React from 'react';

export const MinusSquare: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMinusSquare data-icon="minussquare" {...rootProps} />
);
