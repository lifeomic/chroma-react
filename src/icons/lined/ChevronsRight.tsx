import { ChevronsRight as FeatherChevronsRight, Props } from 'react-feather';
import * as React from 'react';

export const ChevronsRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronsRight data-icon="chevronsright" {...rootProps} />
);
