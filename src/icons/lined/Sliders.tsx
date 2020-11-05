import { Sliders as FeatherSliders, Props } from 'react-feather';
import * as React from 'react';

export const Sliders: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSliders data-icon="sliders" {...rootProps} />
);
