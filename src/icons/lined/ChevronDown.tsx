import { ChevronDown as FeatherChevronDown, Props } from 'react-feather';
import * as React from 'react';

export const ChevronDown: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChevronDown data-icon="chevrondown" {...rootProps} />
);
