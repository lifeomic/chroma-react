import { UserX as FeatherUserX, Props } from 'react-feather';
import * as React from 'react';

export const UserX: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUserX data-icon="userx" {...rootProps} />
);
