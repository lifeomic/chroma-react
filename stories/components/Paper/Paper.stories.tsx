import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Paper } from '../../../src/components/Paper';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const PaperStory: React.FC = () => (
  <Container
    containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
  >
    <Paper padding={select('padding', [0, 1, 2], 2)}>
      <p>Your content here</p>
    </Paper>
  </Container>
);

storiesOf('Components/Paper', module).add('Default', () => <PaperStory />, {
  readme: { content: md },
});
