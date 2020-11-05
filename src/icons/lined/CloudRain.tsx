import { CloudRain as FeatherCloudRain, Props } from 'react-feather';
import * as React from 'react';

export const CloudRain: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCloudRain data-icon="cloudrain" {...rootProps} />
);
