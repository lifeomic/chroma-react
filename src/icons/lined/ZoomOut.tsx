import { ZoomOut as FeatherZoomOut, Props } from 'react-feather';
import * as React from 'react';

export const ZoomOut: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherZoomOut data-icon="zoomout" {...rootProps} />
);
