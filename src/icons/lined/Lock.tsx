import { Lock as FeatherLock, Props } from 'react-feather';
import * as React from 'react';

export const Lock: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLock data-icon="lock" {...rootProps} />
);
