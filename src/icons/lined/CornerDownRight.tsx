import {
  CornerDownRight as FeatherCornerDownRight,
  Props,
} from 'react-feather';
import * as React from 'react';

export const CornerDownRight: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCornerDownRight data-icon="cornerdownright" {...rootProps} />
);
