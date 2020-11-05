import { PlusSquare as FeatherPlusSquare, Props } from 'react-feather';
import * as React from 'react';

export const PlusSquare: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPlusSquare data-icon="plussquare" {...rootProps} />
);
