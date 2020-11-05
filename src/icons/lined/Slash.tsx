import { Slash as FeatherSlash, Props } from 'react-feather';
import * as React from 'react';

export const Slash: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSlash data-icon="slash" {...rootProps} />
);
