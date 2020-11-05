import { File as FeatherFile, Props } from 'react-feather';
import * as React from 'react';

export const File: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFile data-icon="file" {...rootProps} />
);
