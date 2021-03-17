import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { Toggle } from '../../../src/components/Toggle';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const ToggleStory: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  console.log(checked);

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
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
          />
          <Toggle checked={true} label="Always checked (doesn't toggle)" />
          <Toggle disabled label="Not checked, disabled" />
          <Toggle disabled checked label="Checked + disabled" />
          <Toggle
            helpMessage="This is some helper text."
            label="With help message"
          />
          <Toggle hasError label="With error" />
          <Toggle
            hasError
            errorMessage="This is required!"
            label="With error + error message"
          />
          <Toggle
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
          />
          <Toggle label="With right placement" placement="right" />
          <Toggle
            label="With right placement + fullWidth"
            placement="right"
            fullWidth
          />
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label=""
            aria-label="Toggle with no label"
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
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
          />
          <Toggle checked={true} label="Always checked (doesn't toggle)" />
          <Toggle disabled label="Not checked, disabled" />
          <Toggle disabled checked label="Checked + disabled" />
          <Toggle
            helpMessage="This is some helper text."
            label="With help message"
          />
          <Toggle hasError label="With error" />
          <Toggle
            hasError
            errorMessage="This is required!"
            label="With error + error message"
          />
          <Toggle
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
          />
          <Toggle label="With right placement" placement="right" />
          <Toggle
            label="With right placement + fullWidth"
            placement="right"
            fullWidth
          />
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label=""
            aria-label="Toggle with no label"
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
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
            color="inverse"
          />
          <Toggle
            checked={true}
            label="Always checked (doesn't toggle)"
            color="inverse"
          />
          <Toggle disabled label="Not checked, disabled" color="inverse" />
          <Toggle disabled checked label="Checked + disabled" color="inverse" />
          <Toggle
            helpMessage="This is some helper text."
            label="With help message"
            color="inverse"
          />
          <Toggle hasError label="With error" color="inverse" />
          <Toggle
            hasError
            errorMessage="This is required!"
            label="With error + error message"
            color="inverse"
          />
          <Toggle
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
            color="inverse"
          />
          <Toggle
            label="With right placement"
            placement="right"
            color="inverse"
          />
          <Toggle
            label="With right placement + fullWidth"
            placement="right"
            color="inverse"
            fullWidth
          />
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label=""
            aria-label="Toggle with no label"
            color="inverse"
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
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
            color="inverse"
          />
          <Toggle
            checked={true}
            label="Always checked (doesn't toggle)"
            color="inverse"
          />
          <Toggle disabled label="Not checked, disabled" color="inverse" />
          <Toggle disabled checked label="Checked + disabled" color="inverse" />
          <Toggle
            helpMessage="This is some helper text."
            label="With help message"
            color="inverse"
          />
          <Toggle hasError label="With error" color="inverse" />
          <Toggle
            hasError
            errorMessage="This is required!"
            label="With error + error message"
            color="inverse"
          />
          <Toggle
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
            color="inverse"
          />
          <Toggle
            label="With right placement"
            placement="right"
            color="inverse"
          />
          <Toggle
            label="With right placement + fullWidth"
            placement="right"
            color="inverse"
            fullWidth
          />
          <Toggle
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label=""
            aria-label="Toggle with no label"
            color="inverse"
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Toggle', module).add(
  'Default',
  () => <ToggleStory />,
  { readme: { content: defaultMd } }
);
