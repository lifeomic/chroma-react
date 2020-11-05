import { Monitor as FeatherMonitor, Props } from 'react-feather';
import * as React from 'react';

export const Monitor: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMonitor data-icon="monitor" {...rootProps} />
);
