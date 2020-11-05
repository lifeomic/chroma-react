import { BookOpen as FeatherBookOpen, Props } from 'react-feather';
import * as React from 'react';

export const BookOpen: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBookOpen data-icon="bookopen" {...rootProps} />
);
