import { Key as FeatherKey, Props } from 'react-feather';
import * as React from 'react';

export const Key: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherKey data-icon="key" {...rootProps} />
);
