import { MessageSquare as FeatherMessageSquare, Props } from 'react-feather';
import * as React from 'react';

export const MessageSquare: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMessageSquare data-icon="messagesquare" {...rootProps} />
);
