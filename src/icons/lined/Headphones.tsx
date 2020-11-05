import { Headphones as FeatherHeadphones, Props } from 'react-feather';
import * as React from 'react';

export const Headphones: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherHeadphones data-icon="headphones" {...rootProps} />
);
