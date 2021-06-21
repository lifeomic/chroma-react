import { MessageCircle as FeatherMessageCircle, Props } from 'react-feather';
import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */

export const MessageCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMessageCircle data-icon="messagecircle" {...rootProps} />
);
