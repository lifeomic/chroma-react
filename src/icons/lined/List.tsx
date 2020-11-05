import { List as FeatherList, Props } from 'react-feather';
import * as React from 'react';

export const List: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherList data-icon="list" {...rootProps} />
);
