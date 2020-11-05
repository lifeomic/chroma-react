import { AlignJustify as FeatherAlignJustify, Props } from 'react-feather';
import * as React from 'react';

export const AlignJustify: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlignJustify data-icon="alignjustify" {...rootProps} />
);
