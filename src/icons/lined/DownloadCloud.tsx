import { DownloadCloud as FeatherDownloadCloud, Props } from 'react-feather';
import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */

export const DownloadCloud: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDownloadCloud data-icon="downloadcloud" {...rootProps} />
);
