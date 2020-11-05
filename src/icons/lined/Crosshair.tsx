import { Crosshair as FeatherCrosshair, Props } from 'react-feather';
import * as React from 'react';

export const Crosshair: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCrosshair data-icon="crosshair" {...rootProps} />
);
