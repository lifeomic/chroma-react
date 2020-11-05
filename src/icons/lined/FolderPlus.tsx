import { FolderPlus as FeatherFolderPlus, Props } from 'react-feather';
import * as React from 'react';

export const FolderPlus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFolderPlus data-icon="folderplus" {...rootProps} />
);
