import { Underline as FeatherUnderline, Props } from 'react-feather';
import * as React from 'react';

export const Underline: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherUnderline data-icon="underline" {...rootProps} />
);
