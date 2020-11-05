import { CloudOff as FeatherCloudOff, Props } from 'react-feather';
import * as React from 'react';

export const CloudOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCloudOff data-icon="cloudoff" {...rootProps} />
);
