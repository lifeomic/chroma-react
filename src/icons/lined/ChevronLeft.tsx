import { ChevronLeft as FeatherChevronLeft, Props } from 'react-feather';
import * as React from 'react';

export const ChevronLeft: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronLeft data-icon="chevronleft" {...rootProps} />
);
