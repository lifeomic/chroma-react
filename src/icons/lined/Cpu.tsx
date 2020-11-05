import { Cpu as FeatherCpu, Props } from 'react-feather';
import * as React from 'react';

export const Cpu: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCpu data-icon="cpu" {...rootProps} />
);
