import { Printer as FeatherPrinter, Props } from 'react-feather';
import * as React from 'react';

export const Printer: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPrinter data-icon="printer" {...rootProps} />
);
