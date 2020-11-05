import { Edit as FeatherEdit, Props } from 'react-feather';
import * as React from 'react';

export const Edit: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherEdit data-icon="edit" {...rootProps} />
);
