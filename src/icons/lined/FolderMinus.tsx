import { FolderMinus as FeatherFolderMinus, Props } from 'react-feather';
import * as React from 'react';

export const FolderMinus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFolderMinus data-icon="folderminus" {...rootProps} />
);
