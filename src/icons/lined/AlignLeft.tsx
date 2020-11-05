import { AlignLeft as FeatherAlignLeft, Props } from 'react-feather';
import * as React from 'react';

export const AlignLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlignLeft data-icon="alignleft" {...rootProps} />
);
