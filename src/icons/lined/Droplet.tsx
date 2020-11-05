import { Droplet as FeatherDroplet, Props } from 'react-feather';
import * as React from 'react';

export const Droplet: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDroplet data-icon="droplet" {...rootProps} />
);
