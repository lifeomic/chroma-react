import { FastForward as FeatherFastForward, Props } from 'react-feather';
import * as React from 'react';

export const FastForward: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFastForward data-icon="fastforward" {...rootProps} />
);
