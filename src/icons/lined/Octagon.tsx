import { Octagon as FeatherOctagon, Props } from 'react-feather';
import * as React from 'react';

export const Octagon: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherOctagon data-icon="octagon" {...rootProps} />
);
