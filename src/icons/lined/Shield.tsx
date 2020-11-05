import { Shield as FeatherShield, Props } from 'react-feather';
import * as React from 'react';

export const Shield: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShield data-icon="shield" {...rootProps} />
);
