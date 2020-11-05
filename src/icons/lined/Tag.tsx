import { Tag as FeatherTag, Props } from 'react-feather';
import * as React from 'react';

export const Tag: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTag data-icon="tag" {...rootProps} />
);
