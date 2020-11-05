import { Home as FeatherHome, Props } from 'react-feather';
import * as React from 'react';

export const Home: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherHome data-icon="home" {...rootProps} />
);
