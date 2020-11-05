import { ThumbsUp as FeatherThumbsUp, Props } from 'react-feather';
import * as React from 'react';

export const ThumbsUp: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherThumbsUp data-icon="thumbsup" {...rootProps} />
);
