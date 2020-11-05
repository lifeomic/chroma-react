import { Cast as FeatherCast, Props } from 'react-feather';
import * as React from 'react';

export const Cast: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCast data-icon="cast" {...rootProps} />
);
