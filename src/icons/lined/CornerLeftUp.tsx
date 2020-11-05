import { CornerLeftUp as FeatherCornerLeftUp, Props } from 'react-feather';
import * as React from 'react';

export const CornerLeftUp: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCornerLeftUp data-icon="cornerleftup" {...rootProps} />
);
