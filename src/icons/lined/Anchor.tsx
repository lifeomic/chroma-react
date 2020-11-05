import { Anchor as FeatherAnchor, Props } from 'react-feather';
import * as React from 'react';

export const Anchor: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAnchor data-icon="anchor" {...rootProps} />
);
