import { StopCircle as FeatherStopCircle, Props } from 'react-feather';
import * as React from 'react';

export const StopCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherStopCircle data-icon="stopcircle" {...rootProps} />
);
