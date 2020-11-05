import { Share as FeatherShare, Props } from 'react-feather';
import * as React from 'react';

export const Share: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShare data-icon="share" {...rootProps} />
);
