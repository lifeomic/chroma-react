import { X as FeatherX, Props } from 'react-feather';
import * as React from 'react';

export const X: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherX data-icon="x" {...rootProps} />
);
