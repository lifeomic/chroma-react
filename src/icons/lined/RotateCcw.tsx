import { RotateCcw as FeatherRotateCcw, Props } from 'react-feather';
import * as React from 'react';

export const RotateCcw: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRotateCcw data-icon="rotateccw" {...rootProps} />
);
