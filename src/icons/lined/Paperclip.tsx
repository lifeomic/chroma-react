import { Paperclip as FeatherPaperclip, Props } from 'react-feather';
import * as React from 'react';

export const Paperclip: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPaperclip data-icon="paperclip" {...rootProps} />
);
