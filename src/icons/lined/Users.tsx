import { Users as FeatherUsers, Props } from 'react-feather';
import * as React from 'react';

export const Users: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUsers data-icon="users" {...rootProps} />
);
