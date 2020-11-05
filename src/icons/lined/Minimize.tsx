import { Minimize as FeatherMinimize, Props } from 'react-feather';
import * as React from 'react';

export const Minimize: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMinimize data-icon="minimize" {...rootProps} />
);
