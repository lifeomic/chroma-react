import { LogOut as FeatherLogOut, Props } from 'react-feather';
import * as React from 'react';

export const LogOut: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLogOut data-icon="logout" {...rootProps} />
);
