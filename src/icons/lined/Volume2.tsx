import { Volume2 as FeatherVolume2, Props } from 'react-feather';
import * as React from 'react';

export const Volume2: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVolume2 data-icon="volume2" {...rootProps} />
);
