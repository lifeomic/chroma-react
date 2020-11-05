import { HardDrive as FeatherHardDrive, Props } from 'react-feather';
import * as React from 'react';

export const HardDrive: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherHardDrive data-icon="harddrive" {...rootProps} />
);
