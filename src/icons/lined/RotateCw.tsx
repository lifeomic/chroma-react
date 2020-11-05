import { RotateCw as FeatherRotateCw, Props } from 'react-feather';
import * as React from 'react';

export const RotateCw: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRotateCw data-icon="rotatecw" {...rootProps} />
);
