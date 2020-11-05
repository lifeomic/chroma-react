import { Mic as FeatherMic, Props } from 'react-feather';
import * as React from 'react';

export const Mic: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMic data-icon="mic" {...rootProps} />
);
