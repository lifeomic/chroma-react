import { Circle as FeatherCircle, Props } from 'react-feather';
import * as React from 'react';

export const Circle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCircle data-icon="circle" {...rootProps} />
);
