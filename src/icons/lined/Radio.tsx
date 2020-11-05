import { Radio as FeatherRadio, Props } from 'react-feather';
import * as React from 'react';

export const Radio: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRadio data-icon="radio" {...rootProps} />
);
