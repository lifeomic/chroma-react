import { Trello as FeatherTrello, Props } from 'react-feather';
import * as React from 'react';

export const Trello: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTrello data-icon="trello" {...rootProps} />
);
