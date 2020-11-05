import { Award as FeatherAward, Props } from 'react-feather';
import * as React from 'react';

export const Award: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAward data-icon="award" {...rootProps} />
);
