import { AlignRight as FeatherAlignRight, Props } from 'react-feather';
import * as React from 'react';

export const AlignRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlignRight data-icon="alignright" {...rootProps} />
);
