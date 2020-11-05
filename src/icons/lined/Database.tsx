import { Database as FeatherDatabase, Props } from 'react-feather';
import * as React from 'react';

export const Database: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDatabase data-icon="database" {...rootProps} />
);
