import { Clipboard as FeatherClipboard, Props } from 'react-feather';
import * as React from 'react';

export const Clipboard: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherClipboard data-icon="clipboard" {...rootProps} />
);
