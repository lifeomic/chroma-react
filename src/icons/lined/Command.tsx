import { Command as FeatherCommand, Props } from 'react-feather';
import * as React from 'react';

export const Command: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCommand data-icon="command" {...rootProps} />
);
