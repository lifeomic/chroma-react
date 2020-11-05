import { Italic as FeatherItalic, Props } from 'react-feather';
import * as React from 'react';

export const Italic: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherItalic data-icon="italic" {...rootProps} />
);
