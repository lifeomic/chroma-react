import { Film as FeatherFilm, Props } from 'react-feather';
import * as React from 'react';

export const Film: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFilm data-icon="film" {...rootProps} />
);
