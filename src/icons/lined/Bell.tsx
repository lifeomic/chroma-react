import { Bell as FeatherBell, Props } from 'react-feather';
import * as React from 'react';

export const Bell: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBell data-icon="bell" {...rootProps} />
);
