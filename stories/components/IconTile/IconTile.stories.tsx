import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  IconTile,
  IconTileBadge,
  IconTileContent,
  IconTileHero,
} from '../../../src/components/IconTile';
import { Airplay, Droplet, Heart } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import { Noop } from '../../storyComponents/Noop';
import defaultMd from './default.md';
import iconTileMd from './iconTile.md';
import badgeMd from './iconTileBadge.md';
import contentMd from './iconTileContent.md';
import heroMd from './iconTileHero.md';
import sampleBackground from './sampleBackground.svg';
import sampleBackground2 from './sampleBackground2.png';

const ComposedIconTile: React.FC = () => (
  <Container
    containerStyles={{
      display: 'grid',
      gridGap: '2rem',
      justifyItems: 'center',
      gridTemplateColumns: 'auto',
    }}
  >
    <IconTile>
      <IconTileHero backgroundUrl={sampleBackground} />
      <IconTileBadge icon={Droplet} />
      <IconTileContent text="SVG" caption="Background Image" />
    </IconTile>
    <IconTile>
      <IconTileHero backgroundUrl={sampleBackground2} />
      <IconTileBadge icon={Airplay} />
      <IconTileContent text="PNG" caption="Background Image" />
    </IconTile>
    <IconTile onClick={() => ({})}>
      <IconTileHero backgroundUrl={sampleBackground} />
      <IconTileBadge icon={Heart} />
      <IconTileContent text="With OnClick" caption="Has a hover effect!" />
    </IconTile>
    <IconTile>
      <IconTileHero backgroundUrl={sampleBackground2} />
      <IconTileContent text="No Badge" caption="Caption" />
    </IconTile>
  </Container>
);

storiesOf('Old Components/IconTile', module)
  .add('Default', () => <ComposedIconTile />, {
    readme: { content: defaultMd },
  })
  .add('Icon Tile', () => <Noop />, { readme: { content: iconTileMd } })
  .add('Icon Tile Hero', () => <Noop />, { readme: { content: heroMd } })
  .add('Icon Tile Badge', () => <Noop />, { readme: { content: badgeMd } })
  .add('Icon Tile Content', () => <Noop />, { readme: { content: contentMd } });
