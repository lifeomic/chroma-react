import { Minus as FeatherMinus, Props } from 'react-feather';
import * as React from 'react';

export const Minus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMinus data-icon="minus" {...rootProps} />
);
