import { Scissors as FeatherScissors, Props } from 'react-feather';
import * as React from 'react';

export const Scissors: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherScissors data-icon="scissors" {...rootProps} />
);
