import { Copy as FeatherCopy, Props } from 'react-feather';
import * as React from 'react';

export const Copy: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCopy data-icon="copy" {...rootProps} />
);
