import { Link as FeatherLink, Props } from 'react-feather';
import * as React from 'react';

export const Link: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLink data-icon="link" {...rootProps} />
);
