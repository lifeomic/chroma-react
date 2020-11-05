import { Share2 as FeatherShare2, Props } from 'react-feather';
import * as React from 'react';

export const Share2: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShare2 data-icon="share2" {...rootProps} />
);
