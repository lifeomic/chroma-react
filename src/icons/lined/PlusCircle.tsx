import { PlusCircle as FeatherPlusCircle, Props } from 'react-feather';
import * as React from 'react';

export const PlusCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPlusCircle data-icon="pluscircle" {...rootProps} />
);
