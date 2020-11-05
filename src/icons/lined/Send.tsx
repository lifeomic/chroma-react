import { Send as FeatherSend, Props } from 'react-feather';
import * as React from 'react';

export const Send: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSend data-icon="send" {...rootProps} />
);
