import { DownloadCloud as FeatherDownloadCloud, Props } from 'react-feather';
import * as React from 'react';

export const DownloadCloud: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDownloadCloud data-icon="downloadcloud" {...rootProps} />
);
