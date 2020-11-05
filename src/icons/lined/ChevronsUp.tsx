import { ChevronsUp as FeatherChevronsUp, Props } from 'react-feather';
import * as React from 'react';

export const ChevronsUp: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronsUp data-icon="chevronsup" {...rootProps} />
);
