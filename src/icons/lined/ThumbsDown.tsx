import { ThumbsDown as FeatherThumbsDown, Props } from 'react-feather';
import * as React from 'react';

export const ThumbsDown: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherThumbsDown data-icon="thumbsdown" {...rootProps} />
);
