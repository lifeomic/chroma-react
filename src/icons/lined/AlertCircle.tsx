import { AlertCircle as FeatherAlertCircle, Props } from 'react-feather';
import * as React from 'react';

export const AlertCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlertCircle data-icon="alertcircle" {...rootProps} />
);
