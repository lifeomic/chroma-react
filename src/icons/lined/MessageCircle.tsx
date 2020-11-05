import { MessageCircle as FeatherMessageCircle, Props } from 'react-feather';
import * as React from 'react';

export const MessageCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMessageCircle data-icon="messagecircle" {...rootProps} />
);
