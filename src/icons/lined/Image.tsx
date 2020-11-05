import { Image as FeatherImage, Props } from 'react-feather';
import * as React from 'react';

export const Image: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherImage data-icon="image" {...rootProps} />
);
