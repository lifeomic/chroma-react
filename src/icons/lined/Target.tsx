import { Target as FeatherTarget, Props } from 'react-feather';
import * as React from 'react';

export const Target: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTarget data-icon="target" {...rootProps} />
);
