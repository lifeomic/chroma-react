import { Bold as FeatherBold, Props } from 'react-feather';
import * as React from 'react';

export const Bold: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBold data-icon="bold" {...rootProps} />
);
