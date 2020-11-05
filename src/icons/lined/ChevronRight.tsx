import { ChevronRight as FeatherChevronRight, Props } from 'react-feather';
import * as React from 'react';

export const ChevronRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronRight data-icon="chevronright" {...rootProps} />
);
