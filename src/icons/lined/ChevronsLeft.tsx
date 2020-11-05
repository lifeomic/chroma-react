import { ChevronsLeft as FeatherChevronsLeft, Props } from 'react-feather';
import * as React from 'react';

export const ChevronsLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronsLeft data-icon="chevronsleft" {...rootProps} />
);
