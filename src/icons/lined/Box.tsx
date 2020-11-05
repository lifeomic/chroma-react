import { Box as FeatherBox, Props } from 'react-feather';
import * as React from 'react';

export const Box: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBox data-icon="box" {...rootProps} />
);
