import { UserMinus as FeatherUserMinus, Props } from 'react-feather';
import * as React from 'react';

export const UserMinus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUserMinus data-icon="userminus" {...rootProps} />
);
