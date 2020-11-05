import { Trash as FeatherTrash, Props } from 'react-feather';
import * as React from 'react';

export const Trash: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTrash data-icon="trash" {...rootProps} />
);
