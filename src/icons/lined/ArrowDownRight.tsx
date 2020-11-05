import { ArrowDownRight as FeatherArrowDownRight, Props } from 'react-feather';
import * as React from 'react';

export const ArrowDownRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArrowDownRight data-icon="arrowdownright" {...rootProps} />
);
