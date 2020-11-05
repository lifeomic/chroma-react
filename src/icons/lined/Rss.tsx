import { Rss as FeatherRss, Props } from 'react-feather';
import * as React from 'react';

export const Rss: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRss data-icon="rss" {...rootProps} />
);
