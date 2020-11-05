import { Eye as FeatherEye, Props } from 'react-feather';
import * as React from 'react';

export const Eye: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherEye data-icon="eye" {...rootProps} />
);
