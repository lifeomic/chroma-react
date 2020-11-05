import { Folder as FeatherFolder, Props } from 'react-feather';
import * as React from 'react';

export const Folder: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFolder data-icon="folder" {...rootProps} />
);
