import { Feather as FeatherFeather, Props } from 'react-feather';
import * as React from 'react';

export const Feather: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFeather data-icon="feather" {...rootProps} />
);
