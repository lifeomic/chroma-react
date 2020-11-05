import { Camera as FeatherCamera, Props } from 'react-feather';
import * as React from 'react';

export const Camera: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCamera data-icon="camera" {...rootProps} />
);
