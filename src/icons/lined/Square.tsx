import { Square as FeatherSquare, Props } from 'react-feather';
import * as React from 'react';

export const Square: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSquare data-icon="square" {...rootProps} />
);
