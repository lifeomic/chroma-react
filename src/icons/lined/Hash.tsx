import { Hash as FeatherHash, Props } from 'react-feather';
import * as React from 'react';

export const Hash: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherHash data-icon="hash" {...rootProps} />
);
