import { Download as FeatherDownload, Props } from 'react-feather';
import * as React from 'react';

export const Download: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDownload data-icon="download" {...rootProps} />
);
