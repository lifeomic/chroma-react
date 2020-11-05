import { ChevronsDown as FeatherChevronsDown, Props } from 'react-feather';
import * as React from 'react';

export const ChevronsDown: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronsDown data-icon="chevronsdown" {...rootProps} />
);
