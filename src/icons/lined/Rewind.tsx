import { Rewind as FeatherRewind, Props } from 'react-feather';
import * as React from 'react';

export const Rewind: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRewind data-icon="rewind" {...rootProps} />
);
