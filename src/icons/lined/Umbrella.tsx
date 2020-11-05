import { Umbrella as FeatherUmbrella, Props } from 'react-feather';
import * as React from 'react';

export const Umbrella: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUmbrella data-icon="umbrella" {...rootProps} />
);
