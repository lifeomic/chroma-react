import { Navigation as FeatherNavigation, Props } from 'react-feather';
import * as React from 'react';

export const Navigation: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherNavigation data-icon="navigation" {...rootProps} />
);
