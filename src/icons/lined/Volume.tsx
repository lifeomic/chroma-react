import { Volume as FeatherVolume, Props } from 'react-feather';
import * as React from 'react';

export const Volume: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVolume data-icon="volume" {...rootProps} />
);
