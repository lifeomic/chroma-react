import { CameraOff as FeatherCameraOff, Props } from 'react-feather';
import * as React from 'react';

export const CameraOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCameraOff data-icon="cameraoff" {...rootProps} />
);
