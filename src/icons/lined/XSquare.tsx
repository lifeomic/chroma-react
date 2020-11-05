import { XSquare as FeatherXSquare, Props } from 'react-feather';
import * as React from 'react';

export const XSquare: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherXSquare data-icon="xsquare" {...rootProps} />
);
