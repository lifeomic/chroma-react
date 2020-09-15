import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  SmallTile,
  SmallTileContent,
  SmallTileFooter,
} from '../../../src/components/SmallTile';
import { Container } from '../../storyComponents/Container';
import { Noop } from '../../storyComponents/Noop';
import defaultMd from './default.md';
import smallTileMd from './smallTile.md';
import smallTileContentMd from './smallTileContent.md';
import smallTileFooterMd from './smallTileFooter.md';

const ComposedSmallTileStory: React.FC = () => (
  <Container
    containerStyles={{
      display: 'grid',
      gridGap: '2rem',
      gridTemplateColumns: 'auto',
    }}
  >
    <SmallTile>
      <SmallTileContent text="Title Text" />
      <SmallTileFooter text="Footer Text" />
    </SmallTile>
    <SmallTile onClick={() => ({})}>
      <SmallTileContent text="With onClick" />
      <SmallTileFooter text="Has a hover effect!" />
    </SmallTile>
    <SmallTile>
      <SmallTileContent text="No Footer, 100% height" fullHeight />
    </SmallTile>
  </Container>
);

storiesOf('Components/SmallTile', module)
  .add('Default', () => <ComposedSmallTileStory />, {
    readme: { content: defaultMd },
  })
  .add('Small Tile', () => <Noop />, { readme: { content: smallTileMd } })
  .add('Small Tile Content', () => <Noop />, {
    readme: { content: smallTileContentMd },
  })
  .add('Small Tile Footer', () => <Noop />, {
    readme: { content: smallTileFooterMd },
  });
