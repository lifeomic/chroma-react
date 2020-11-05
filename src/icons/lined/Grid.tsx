import { Grid as FeatherGrid, Props } from 'react-feather';
import * as React from 'react';

export const Grid: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGrid data-icon="grid" {...rootProps} />
);
