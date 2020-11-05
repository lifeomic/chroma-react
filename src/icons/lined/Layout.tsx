import { Layout as FeatherLayout, Props } from 'react-feather';
import * as React from 'react';

export const Layout: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLayout data-icon="layout" {...rootProps} />
);
