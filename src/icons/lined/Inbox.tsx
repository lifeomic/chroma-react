import { Inbox as FeatherInbox, Props } from 'react-feather';
import * as React from 'react';

export const Inbox: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherInbox data-icon="inbox" {...rootProps} />
);
