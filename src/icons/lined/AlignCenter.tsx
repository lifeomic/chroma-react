import { AlignCenter as FeatherAlignCenter, Props } from 'react-feather';
import * as React from 'react';

export const AlignCenter: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlignCenter data-icon="aligncenter" {...rootProps} />
);
