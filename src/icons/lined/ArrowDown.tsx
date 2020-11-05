import { ArrowDown as FeatherArrowDown, Props } from 'react-feather';
import * as React from 'react';

export const ArrowDown: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowDown data-icon="arrowdown" {...rootProps} />
);
