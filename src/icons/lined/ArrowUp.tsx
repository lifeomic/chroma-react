import { ArrowUp as FeatherArrowUp, Props } from 'react-feather';
import * as React from 'react';

export const ArrowUp: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowUp data-icon="arrowup" {...rootProps} />
);
