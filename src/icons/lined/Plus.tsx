import { Plus as FeatherPlus, Props } from 'react-feather';
import * as React from 'react';

export const Plus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPlus data-icon="plus" {...rootProps} />
);
