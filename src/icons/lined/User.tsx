import { User as FeatherUser, Props } from 'react-feather';
import * as React from 'react';

export const User: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUser data-icon="user" {...rootProps} />
);
