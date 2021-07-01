import { Maximize as FeatherMaximize, Props } from 'react-feather';
import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */

export const Maximize: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMaximize data-icon="maximize" {...rootProps} />
);
