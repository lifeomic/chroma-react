import { ChevronUp as FeatherChevronUp, Props } from 'react-feather';
import * as React from 'react';

export const ChevronUp: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronUp data-icon="chevronup" {...rootProps} />
);
