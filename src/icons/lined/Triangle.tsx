import { Triangle as FeatherTriangle, Props } from 'react-feather';
import * as React from 'react';

export const Triangle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTriangle data-icon="triangle" {...rootProps} />
);
