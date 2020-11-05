import { Bookmark as FeatherBookmark, Props } from 'react-feather';
import * as React from 'react';

export const Bookmark: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBookmark data-icon="bookmark" {...rootProps} />
);
