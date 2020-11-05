import { Frown as FeatherFrown, Props } from 'react-feather';
import * as React from 'react';

export const Frown: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFrown data-icon="frown" {...rootProps} />
);
