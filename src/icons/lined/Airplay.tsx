import { Airplay as FeatherAirplay, Props } from 'react-feather';
import * as React from 'react';

export const Airplay: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAirplay data-icon="airplay" {...rootProps} />
);
