import { Watch as FeatherWatch, Props } from 'react-feather';
import * as React from 'react';

export const Watch: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherWatch data-icon="watch" {...rootProps} />
);
