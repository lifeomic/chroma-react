import { AlertOctagon as FeatherAlertOctagon, Props } from 'react-feather';
import * as React from 'react';

export const AlertOctagon: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAlertOctagon data-icon="alertoctagon" {...rootProps} />
);
