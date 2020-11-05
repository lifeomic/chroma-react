import { Chrome as FeatherChrome, Props } from 'react-feather';
import * as React from 'react';

export const Chrome: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherChrome data-icon="chrome" {...rootProps} />
);
