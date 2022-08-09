import { Container } from '../../storyComponents/Container';
import { FormBox } from '../../../src/components/FormBox';
import { PercentFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './percentFormat.md';

const PercentFormatFieldStory: React.FC = () => {
  const [percent, setPercent] = React.useState(10);
  const [percentMin, setPercentMin] = React.useState(10);
  const [percentMax, setPercentMax] = React.useState(10);

  return (
    <Container
      containerStyles={{ display: 'flex', flexFlow: 'wrap', padding: 0 }}
    >
      <Container
        containerStyles={{
          background: '#fff',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
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
          <PercentFormatField
            label="Percent (required)"
            value={percentMax}
            max={75}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            onChange={(value) => setPercentMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#f5f8fa',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
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
          <PercentFormatField
            label="Percent (required)"
            value={percentMax}
            max={75}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            onChange={(value) => setPercentMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#006eb7',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <PercentFormatField
            label="Percent"
            value={percent}
            color="inverse"
            onChange={(value) => setPercent(value)}
          />
          <PercentFormatField
            label="Percent (min 5%)"
            value={percentMin}
            min={5}
            color="inverse"
            onChange={(value) => setPercentMin(value)}
          />
          <PercentFormatField
            label="Percent (max 75%)"
            value={percentMax}
            max={75}
            color="inverse"
            onChange={(value) => setPercentMax(value)}
          />
          <PercentFormatField
            label="Percent (required)"
            value={percentMax}
            max={75}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            color="inverse"
            onChange={(value) => setPercentMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#484049',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <PercentFormatField
            label="Percent"
            value={percent}
            color="inverse"
            onChange={(value) => setPercent(value)}
          />
          <PercentFormatField
            label="Percent (min 5%)"
            value={percentMin}
            min={5}
            color="inverse"
            onChange={(value) => setPercentMin(value)}
          />
          <PercentFormatField
            label="Percent (max 75%)"
            value={percentMax}
            max={75}
            color="inverse"
            onChange={(value) => setPercentMax(value)}
          />
          <PercentFormatField
            label="Percent (required)"
            value={percentMax}
            max={75}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            color="inverse"
            onChange={(value) => setPercentMax(value)}
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Number Format Field', module).add(
  'Percent',
  () => <PercentFormatFieldStory />,
  { readme: { content: md } }
);
