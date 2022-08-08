import { Container } from '../../storyComponents/Container';
import { FormBox } from '../../../src/components/FormBox';
import { PhoneNumberFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import defaultMd from './phoneNumberFormat.md';

const PhoneNumberFormatFieldStory: React.FC = () => {
  const [text, setText] = React.useState('');

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
          <PhoneNumberFormatField
            label="Phone"
            value={text}
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (placeholder)"
            value={text}
            placeholder="Cellphone number"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (required)"
            value={text}
            hasError
            errorMessage="This is required"
            showRequiredLabel
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (full width)"
            value={text}
            fullWidth
            onChange={(value) => setText(value)}
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
          <PhoneNumberFormatField
            label="Phone"
            value={text}
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (placeholder)"
            value={text}
            placeholder="Cellphone number"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (required)"
            value={text}
            hasError
            errorMessage="This is required"
            showRequiredLabel
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (full width)"
            value={text}
            fullWidth
            onChange={(value) => setText(value)}
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
          <PhoneNumberFormatField
            label="Phone"
            value={text}
            color="inverse"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (placeholder)"
            value={text}
            placeholder="Cellphone number"
            color="inverse"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (required)"
            value={text}
            hasError
            errorMessage="This is required"
            showRequiredLabel
            color="inverse"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (full width)"
            value={text}
            fullWidth
            color="inverse"
            onChange={(value) => setText(value)}
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
          <PhoneNumberFormatField
            label="Phone"
            value={text}
            color="inverse"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (placeholder)"
            value={text}
            placeholder="Cellphone number"
            color="inverse"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (required)"
            value={text}
            hasError
            errorMessage="This is required"
            showRequiredLabel
            color="inverse"
            onChange={(value) => setText(value)}
          />
          <PhoneNumberFormatField
            label="Phone (full width)"
            value={text}
            fullWidth
            color="inverse"
            onChange={(value) => setText(value)}
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Number Format Field', module).add(
  'Phone Number',
  () => <PhoneNumberFormatFieldStory />,
  { readme: { content: defaultMd } }
);
