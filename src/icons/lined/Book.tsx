import { Book as FeatherBook, Props } from 'react-feather';
import * as React from 'react';

export const Book: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBook data-icon="book" {...rootProps} />
);
