import { Volume2 as FeatherVolume2, Props } from 'react-feather';
import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */

export const Volume2: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVolume2 data-icon="volume2" {...rootProps} />
);
