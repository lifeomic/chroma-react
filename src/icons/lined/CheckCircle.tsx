import { CheckCircle as FeatherCheckCircle, Props } from 'react-feather';
import * as React from 'react';

export const CheckCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCheckCircle data-icon="checkcircle" {...rootProps} />
);
