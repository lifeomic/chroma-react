import { Zap as FeatherZap, Props } from 'react-feather';
import * as React from 'react';

export const Zap: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherZap data-icon="zap" {...rootProps} />
);
