import { CornerUpRight as FeatherCornerUpRight, Props } from 'react-feather';
import * as React from 'react';

export const CornerUpRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCornerUpRight data-icon="cornerupright" {...rootProps} />
);
