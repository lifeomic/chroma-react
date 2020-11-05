import { Menu as FeatherMenu, Props } from 'react-feather';
import * as React from 'react';

export const Menu: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMenu data-icon="menu" {...rootProps} />
);
