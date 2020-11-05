import { Maximize as FeatherMaximize, Props } from 'react-feather';
import * as React from 'react';

export const Maximize: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMaximize data-icon="maximize" {...rootProps} />
);
