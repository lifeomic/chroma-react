import { CheckSquare as FeatherCheckSquare, Props } from 'react-feather';
import * as React from 'react';

export const CheckSquare: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCheckSquare data-icon="checksquare" {...rootProps} />
);
