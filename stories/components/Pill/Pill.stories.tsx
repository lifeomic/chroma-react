import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Pill } from '../../../src/components/Pill';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const AllPillsStory: React.FC = () => (
  <>
    <Container
      containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Pill label="123 Results" />
      <Pill label="1 of 20" />
      <Pill label="3" color="primary" />
      <Pill label="Beta" variant="highlight" />
    </Container>
  </>
);

const HighlightPillStory: React.FC = () => (
  <>
    <Container
      containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Pill label="Beta" variant="highlight" />
      <Pill label="New" variant="highlight" />
      <Pill label="Trial Ends in 30 days" variant="highlight" />
    </Container>
    <Container
      containerStyles={{
        display: 'flex',
        justifyContent: 'space-around',
        background: '#0096e1',
      }}
    >
      <Pill label="Beta" variant="highlight" />
      <Pill label="New" variant="highlight" />
      <Pill label="Trial Ends in 30 days" variant="highlight" />
    </Container>
    <Container
      containerStyles={{
        display: 'flex',
        justifyContent: 'space-around',
        background: '#292c2f',
      }}
    >
      <Pill label="Beta" variant="highlight" />
      <Pill label="New" variant="highlight" />
      <Pill label="Trial Ends in 30 days" variant="highlight" />
    </Container>
  </>
);

storiesOf('Components/Pill', module)
  .add('Default', () => <AllPillsStory />, {
    readme: { content: md },
  })
  .add('Highlight', () => <HighlightPillStory />, {
    readme: { content: md },
  });
