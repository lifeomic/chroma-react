import { ToggleRight as FeatherToggleRight, Props } from 'react-feather';
import * as React from 'react';

export const ToggleRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherToggleRight data-icon="toggleright" {...rootProps} />
);
