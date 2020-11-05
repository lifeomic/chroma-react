import { ArrowRight as FeatherArrowRight, Props } from 'react-feather';
import * as React from 'react';

export const ArrowRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowRight data-icon="arrowright" {...rootProps} />
);
