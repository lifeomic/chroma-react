import { Flag as FeatherFlag, Props } from 'react-feather';
import * as React from 'react';

export const Flag: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFlag data-icon="flag" {...rootProps} />
);
