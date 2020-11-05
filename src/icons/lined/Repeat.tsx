import { Repeat as FeatherRepeat, Props } from 'react-feather';
import * as React from 'react';

export const Repeat: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRepeat data-icon="repeat" {...rootProps} />
);
