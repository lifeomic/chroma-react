import { Container } from '../../storyComponents/Container';
import { PercentFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './percentFormat.md';

const PercentFormatFieldStory: React.FC = () => {
  const [percent, setPercent] = React.useState(10);
  const [percentMin, setPercentMin] = React.useState(10);
  const [percentMax, setPercentMax] = React.useState(10);

  return (
    <Container containerStyles={{ flexWrap: 'wrap' }}>
      <PercentFormatField
        label="Percent"
        value={percent}
        onChange={(value) => setPercent(value)}
      />
      <PercentFormatField
        label="Percent (min 5%)"
        value={percentMin}
        min={5}
        onChange={(value) => setPercentMin(value)}
      />
      <PercentFormatField
        label="Percent (max 75%)"
        value={percentMax}
        max={75}
        onChange={(value) => setPercentMax(value)}
      />
    </Container>
  );
};

storiesOf('Form Components/Number Format Field', module).add(
  'Percent',
  () => <PercentFormatFieldStory />,
  { readme: { content: md } }
);
