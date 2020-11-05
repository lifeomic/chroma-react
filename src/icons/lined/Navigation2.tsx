import { Navigation2 as FeatherNavigation2, Props } from 'react-feather';
import * as React from 'react';

export const Navigation2: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherNavigation2 data-icon="navigation2" {...rootProps} />
);
