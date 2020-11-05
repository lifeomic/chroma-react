import { Meh as FeatherMeh, Props } from 'react-feather';
import * as React from 'react';

export const Meh: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMeh data-icon="meh" {...rootProps} />
);
