import { CloudDrizzle as FeatherCloudDrizzle, Props } from 'react-feather';
import * as React from 'react';

export const CloudDrizzle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCloudDrizzle data-icon="clouddrizzle" {...rootProps} />
);
