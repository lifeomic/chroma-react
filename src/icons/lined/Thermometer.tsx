import { Thermometer as FeatherThermometer, Props } from 'react-feather';
import * as React from 'react';

export const Thermometer: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherThermometer data-icon="thermometer" {...rootProps} />
);
