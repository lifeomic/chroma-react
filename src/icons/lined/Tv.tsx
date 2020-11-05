import { Tv as FeatherTv, Props } from 'react-feather';
import * as React from 'react';

export const Tv: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTv data-icon="tv" {...rootProps} />
);
