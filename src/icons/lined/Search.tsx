import { Search as FeatherSearch, Props } from 'react-feather';
import * as React from 'react';

export const Search: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSearch data-icon="search" {...rootProps} />
);
