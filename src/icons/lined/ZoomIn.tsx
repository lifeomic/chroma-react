import { ZoomIn as FeatherZoomIn, Props } from 'react-feather';
import * as React from 'react';

export const ZoomIn: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherZoomIn data-icon="zoomin" {...rootProps} />
);
