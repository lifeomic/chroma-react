import { MoreHorizontal as FeatherMoreHorizontal, Props } from 'react-feather';
import * as React from 'react';

export const MoreHorizontal: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMoreHorizontal data-icon="morehorizontal" {...rootProps} />
);
