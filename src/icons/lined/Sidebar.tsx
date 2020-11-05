import { Sidebar as FeatherSidebar, Props } from 'react-feather';
import * as React from 'react';

export const Sidebar: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSidebar data-icon="sidebar" {...rootProps} />
);
