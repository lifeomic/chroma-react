import { Youtube as FeatherYoutube, Props } from 'react-feather';
import * as React from 'react';

export const Youtube: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherYoutube data-icon="youtube" {...rootProps} />
);
