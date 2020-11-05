import { ArrowLeft as FeatherArrowLeft, Props } from 'react-feather';
import * as React from 'react';

export const ArrowLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowLeft data-icon="arrowleft" {...rootProps} />
);
