import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { TextArea } from '../../../src/components/TextArea';
import { HelpCircle } from '../../../src/icons/lined';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const TextAreaStory: React.FC = () => {
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
          <TextArea
            aria-label="Name"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Name"
            />
          <TextArea label="Name" secondaryLabel="Optional" />
          <TextArea
            aria-label="Name"
            label="Name"
            icon={HelpCircle}
            tooltipMessage="Here is descriptive text"
            secondaryLabel="Optional"
            />
          <TextArea aria-label="Name" disabled label="Disabled" />
          <TextArea aria-label="Name" label="Full Width" fullWidth />
          <TextArea aria-label="Name" label="Description" helpMessage="Helper text goes here" />
          <TextArea aria-label="Name" label="Description" hasError />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            errorMessage="This is required"
            />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            />
          <TextArea
            aria-label="Name"
            label="Read only"
            value="This is a read-only textarea"
            readOnly
            />
          <TextArea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label=""
            aria-label="TextArea with no label"
            helpMessage="No label"
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
          <TextArea
            aria-label="Name"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Name"
          />
          <TextArea aria-label="Name" label="Name" secondaryLabel="Optional" />
          <TextArea
            aria-label="Name"
            label="Name"
            icon={HelpCircle}
            tooltipMessage="Here is descriptive text"
            secondaryLabel="Optional"
          />
          <TextArea aria-label="Name" disabled label="Disabled" />
          <TextArea aria-label="Name" label="Full Width" fullWidth />
          <TextArea aria-label="Name" label="Description" helpMessage="Helper text goes here" />
          <TextArea aria-label="Name" label="Description" hasError />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            errorMessage="This is required"
            />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            />
          <TextArea
            aria-label="Name"
            label="Read only"
            value="This is a read-only textarea"
            readOnly
            />
          <TextArea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label=""
            aria-label="TextArea with no label"
            helpMessage="No label"
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
          <TextArea
            aria-label="Name"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Name"
            color="inverse"
            />
          <TextArea aria-label="Name" label="Name" secondaryLabel="Optional" color="inverse" />
          <TextArea
            aria-label="Name"
            label="Name"
            icon={HelpCircle}
            tooltipMessage="Here is descriptive text"
            secondaryLabel="Optional"
            color="inverse"
          />
          <TextArea aria-label="Name" disabled label="Disabled" color="inverse" />
          <TextArea aria-label="Name" label="Full Width" fullWidth color="inverse" />
          <TextArea
            aria-label="Name"
            label="Description"
            helpMessage="Helper text goes here"
            color="inverse"
            />
          <TextArea aria-label="Name" label="Description" hasError color="inverse" />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            errorMessage="This is required"
            color="inverse"
            />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            color="inverse"
            />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            color="inverse"
            />
          <TextArea
            aria-label="Name"
            label="Read only"
            value="This is a read-only textarea"
            color="inverse"
            readOnly
            />
          <TextArea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label=""
            aria-label="TextArea with no label"
            color="inverse"
            helpMessage="No label"
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
          <TextArea
            aria-label="Name"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Name"
            color="inverse"
          />
          <TextArea aria-label="Name" label="Name" secondaryLabel="Optional" color="inverse" />
          <TextArea
            aria-label="Name"
            label="Name"
            icon={HelpCircle}
            tooltipMessage="Here is descriptive text"
            secondaryLabel="Optional"
            color="inverse"
          />
          <TextArea aria-label="Name" disabled label="Disabled" color="inverse" />
          <TextArea aria-label="Name" label="Full Width" fullWidth color="inverse" />
          <TextArea
            aria-label="Name"
            label="Description"
            helpMessage="Helper text goes here"
            color="inverse"
          />
          <TextArea aria-label="Name" label="Description" hasError color="inverse" />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            errorMessage="This is required"
            color="inverse"
          />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            color="inverse"
          />
          <TextArea
            aria-label="Name"
            label="Description"
            hasError
            helpMessage="Helper text goes here"
            errorMessage="This is required"
            color="inverse"
          />
          <TextArea
            aria-label="Name"
            label="Read only"
            value="This is a read-only textarea"
            color="inverse"
            readOnly
          />
          <TextArea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label=""
            aria-label="TextArea with no label"
            color="inverse"
            helpMessage="No label"
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/TextArea', module).add(
  'Default',
  () => <TextAreaStory />,
  { readme: { content: defaultMd } }
);
