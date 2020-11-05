import { Server as FeatherServer, Props } from 'react-feather';
import * as React from 'react';

export const Server: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherServer data-icon="server" {...rootProps} />
);
