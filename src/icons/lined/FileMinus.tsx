import { FileMinus as FeatherFileMinus, Props } from 'react-feather';
import * as React from 'react';

export const FileMinus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFileMinus data-icon="fileminus" {...rootProps} />
);
