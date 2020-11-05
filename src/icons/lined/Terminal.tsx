import { Terminal as FeatherTerminal, Props } from 'react-feather';
import * as React from 'react';

export const Terminal: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTerminal data-icon="terminal" {...rootProps} />
);
