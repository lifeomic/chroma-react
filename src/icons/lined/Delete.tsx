import { Delete as FeatherDelete, Props } from 'react-feather';
import * as React from 'react';

export const Delete: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherDelete data-icon="delete" {...rootProps} />
);
