import { AlertTriangle as FeatherAlertTriangle, Props } from 'react-feather';
import * as React from 'react';

export const AlertTriangle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlertTriangle data-icon="alerttriangle" {...rootProps} />
);
