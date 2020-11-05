import { ToggleLeft as FeatherToggleLeft, Props } from 'react-feather';
import * as React from 'react';

export const ToggleLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherToggleLeft data-icon="toggleleft" {...rootProps} />
);
