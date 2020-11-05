import { Upload as FeatherUpload, Props } from 'react-feather';
import * as React from 'react';

export const Upload: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUpload data-icon="upload" {...rootProps} />
);
