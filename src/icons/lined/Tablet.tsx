import { Tablet as FeatherTablet, Props } from 'react-feather';
import * as React from 'react';

export const Tablet: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTablet data-icon="tablet" {...rootProps} />
);
