import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { KeymapHelp } from '../../../src/components/KeymapHelp';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const KeymapHelpStory: React.FC = () => {
  return (
    <Container>
      <KeymapHelp />
    </Container>
  );
};

storiesOf('Components/KeymapHelp', module).add(
  'Default',
  () => <KeymapHelpStory />,
  {
    readme: {
      content: md,
    },
  }
);
