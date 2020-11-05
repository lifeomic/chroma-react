import { Disc as FeatherDisc, Props } from 'react-feather';
import * as React from 'react';

export const Disc: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDisc data-icon="disc" {...rootProps} />
);
