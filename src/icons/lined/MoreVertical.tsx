import { MoreVertical as FeatherMoreVertical, Props } from 'react-feather';
import * as React from 'react';

export const MoreVertical: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMoreVertical data-icon="morevertical" {...rootProps} />
);
