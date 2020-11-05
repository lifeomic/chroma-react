import { UserCheck as FeatherUserCheck, Props } from 'react-feather';
import * as React from 'react';

export const UserCheck: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUserCheck data-icon="usercheck" {...rootProps} />
);
