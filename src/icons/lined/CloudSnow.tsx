import { CloudSnow as FeatherCloudSnow, Props } from 'react-feather';
import * as React from 'react';

export const CloudSnow: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCloudSnow data-icon="cloudsnow" {...rootProps} />
);
