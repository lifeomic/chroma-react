import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../../../src/components/Checkbox';
import { FormBox } from '../../../src/components/FormBox';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const CheckboxStory: React.FC = () => {
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
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
          />
          <Checkbox
            checked={true}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Always checked (doesn't toggle)"
          />
          <Checkbox disabled label="Not checked, disabled" />
          <Checkbox disabled checked label="Checked + disabled" />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            helpMessage="This is some helper text."
            label="With help message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            hasError
            label="With error"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            hasError
            showRequiredLabel
            errorMessage="This is required!"
            label="With error + error message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            indeterminate
            label="Indeterminate"
          />
          <Checkbox
            checked
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            disabled
            indeterminate
            label="Indeterminate + disabled"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label=""
            aria-label="Checkbox with no label"
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
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
          />
          <Checkbox checked={true} label="Always checked (doesn't toggle)" />
          <Checkbox disabled label="Not checked, disabled" />
          <Checkbox disabled checked label="Checked + disabled" />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            helpMessage="This is some helper text."
            label="With help message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            hasError
            label="With error"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            hasError
            showRequiredLabel
            errorMessage="This is required!"
            label="With error + error message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            indeterminate
            label="Indeterminate"
          />
          <Checkbox
            checked
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            disabled
            indeterminate
            label="Indeterminate + disabled"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label=""
            aria-label="Checkbox with no label"
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
          <Checkbox
            color="inverse"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
          />
          <Checkbox
            color="inverse"
            checked={true}
            label="Always checked (doesn't toggle)"
          />
          <Checkbox color="inverse" disabled label="Not checked, disabled" />
          <Checkbox
            color="inverse"
            disabled
            checked
            label="Checked + disabled"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            helpMessage="This is some helper text."
            label="With help message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            hasError
            label="With error"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            hasError
            showRequiredLabel
            errorMessage="This is required!"
            label="With error + error message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            indeterminate
            label="Indeterminate"
          />
          <Checkbox
            checked
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            disabled
            indeterminate
            label="Indeterminate + disabled"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            label=""
            aria-label="Checkbox with no label"
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
          <Checkbox
            color="inverse"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="Click to toggle"
          />
          <Checkbox
            color="inverse"
            checked={true}
            label="Always checked (doesn't toggle)"
          />
          <Checkbox color="inverse" disabled label="Not checked, disabled" />
          <Checkbox
            color="inverse"
            disabled
            checked
            label="Checked + disabled"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            helpMessage="This is some helper text."
            label="With help message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            hasError
            label="With error"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            hasError
            showRequiredLabel
            errorMessage="This is required!"
            label="With error + error message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            hasError
            helpMessage="Some helper text here..."
            errorMessage="This is important!"
            label="With help message + error + message"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            indeterminate
            label="Indeterminate"
          />
          <Checkbox
            checked
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            disabled
            indeterminate
            label="Indeterminate + disabled"
          />
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            color="inverse"
            label=""
            aria-label="Checkbox with no label"
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Checkbox', module).add(
  'Default',
  () => <CheckboxStory />,
  { readme: { content: defaultMd } }
);
