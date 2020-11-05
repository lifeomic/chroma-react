import { Code as FeatherCode, Props } from 'react-feather';
import * as React from 'react';

export const Code: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCode data-icon="code" {...rootProps} />
);
