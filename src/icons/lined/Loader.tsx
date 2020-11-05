import { Loader as FeatherLoader, Props } from 'react-feather';
import * as React from 'react';

export const Loader: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLoader data-icon="loader" {...rootProps} />
);
