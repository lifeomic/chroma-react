import { UploadCloud as FeatherUploadCloud, Props } from 'react-feather';
import * as React from 'react';

export const UploadCloud: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUploadCloud data-icon="uploadcloud" {...rootProps} />
);
