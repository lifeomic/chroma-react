import { Video as FeatherVideo, Props } from 'react-feather';
import * as React from 'react';

export const Video: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVideo data-icon="video" {...rootProps} />
);
