import { Share2 as FeatherShare2, Props } from 'react-feather';
import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */

export const Share2: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShare2 data-icon="share2" {...rootProps} />
);
