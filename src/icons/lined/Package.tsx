import { Package as FeatherPackage, Props } from 'react-feather';
import * as React from 'react';

export const Package: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPackage data-icon="package" {...rootProps} />
);
