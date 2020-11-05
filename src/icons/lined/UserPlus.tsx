import { UserPlus as FeatherUserPlus, Props } from 'react-feather';
import * as React from 'react';

export const UserPlus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUserPlus data-icon="userplus" {...rootProps} />
);
