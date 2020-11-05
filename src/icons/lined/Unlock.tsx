import { Unlock as FeatherUnlock, Props } from 'react-feather';
import * as React from 'react';

export const Unlock: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUnlock data-icon="unlock" {...rootProps} />
);
