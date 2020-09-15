import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ExpansionPanel } from '../../../src/components/ExpansionPanel';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const ExpansionPanelStory: React.FC = () => (
  <Container containerStyles={{ display: 'flex', flexDirection: 'column' }}>
    <ExpansionPanel title="Expansion Panel">
      <p>Content inside of panel</p>
    </ExpansionPanel>
  </Container>
);

storiesOf('Components/ExpansionPanel', module).add(
  'Default',
  () => <ExpansionPanelStory />,
  {
    readme: { content: md },
  }
);
