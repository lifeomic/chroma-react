import { CloudLightning as FeatherCloudLightning, Props } from 'react-feather';
import * as React from 'react';

export const CloudLightning: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCloudLightning data-icon="cloudlightning" {...rootProps} />
);
