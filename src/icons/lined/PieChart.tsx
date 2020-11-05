import { PieChart as FeatherPieChart, Props } from 'react-feather';
import * as React from 'react';

export const PieChart: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPieChart data-icon="piechart" {...rootProps} />
);
