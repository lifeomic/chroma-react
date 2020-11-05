import { Volume1 as FeatherVolume1, Props } from 'react-feather';
import * as React from 'react';

export const Volume1: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVolume1 data-icon="volume1" {...rootProps} />
);
