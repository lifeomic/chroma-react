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
      <Pill label="4" color="negative" />
      <Pill label="5" color="positive" />
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

const NegativePillStory: React.FC = () => (
  <>
    <Container
      containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Pill label="123 Results" color="negative" />
      <Pill label="1 of 20" color="negative" />
      <Pill label="3" color="negative" />
    </Container>
  </>
);

const PositivePillStory: React.FC = () => (
  <>
    <Container
      containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Pill label="123 Results" color="positive" />
      <Pill label="1 of 20" color="positive" />
      <Pill label="3" color="positive" />
    </Container>
  </>
);

storiesOf('Components/Pill', module)
  .add('Default', () => <AllPillsStory />, {
    readme: { content: md },
  })
  .add('Highlight', () => <HighlightPillStory />, {
    readme: { content: md },
  })
  .add('Negative', () => <NegativePillStory />, {
    readme: { content: md },
  })
  .add('Positive', () => <PositivePillStory />, {
    readme: { content: md },
  });
