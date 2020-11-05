import { Save as FeatherSave, Props } from 'react-feather';
import * as React from 'react';

export const Save: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSave data-icon="save" {...rootProps} />
);
