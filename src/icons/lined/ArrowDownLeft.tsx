import { ArrowDownLeft as FeatherArrowDownLeft, Props } from 'react-feather';
import * as React from 'react';

export const ArrowDownLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowDownLeft data-icon="arrowdownleft" {...rootProps} />
);
