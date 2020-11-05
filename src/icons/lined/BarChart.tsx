import { BarChart as FeatherBarChart, Props } from 'react-feather';
import * as React from 'react';

export const BarChart: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBarChart data-icon="barchart" {...rootProps} />
);
