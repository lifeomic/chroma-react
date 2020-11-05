import { Crop as FeatherCrop, Props } from 'react-feather';
import * as React from 'react';

export const Crop: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCrop data-icon="crop" {...rootProps} />
);
