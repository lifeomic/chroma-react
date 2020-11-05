import { LogIn as FeatherLogIn, Props } from 'react-feather';
import * as React from 'react';

export const LogIn: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLogIn data-icon="login" {...rootProps} />
);
