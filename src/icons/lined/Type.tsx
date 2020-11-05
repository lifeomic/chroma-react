import { Type as FeatherType, Props } from 'react-feather';
import * as React from 'react';

export const Type: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherType data-icon="type" {...rootProps} />
);
