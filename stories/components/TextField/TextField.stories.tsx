import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { TextField } from '../../../src/components/TextField';
import { HelpCircle, Lock, Mail, User } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';
import { IconButton } from '../../../src/components/IconButton';
import { IconButtonLink } from '../../../src/components/IconButtonLink';
import { BrowserRouter } from 'react-router-dom';

const AllTextFieldsStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <React.Fragment>
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
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
            />
            <TextField disabled label="Disabled" placeholder="Enter name" />
            <TextField
              readOnly
              label="Read Only"
              placeholder="Enter name"
              value="Read-only"
            />
            <TextField
              type="password"
              label="Password"
              icon={HelpCircle}
              placeholder="Enter password"
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              helpMessage="Make it as long and as crazy as you'd like"
            />
            <TextField
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              placeholder="Enter up to 250 characters"
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
            />
            <TextField
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
            />
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
            />
            <TextField
              startAdornment={<User aria-hidden />}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
            />
            <TextField
              endAdornment={<User aria-hidden />}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
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
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
            />
            <TextField disabled label="Disabled" placeholder="Enter name" />
            <TextField
              readOnly
              label="Read Only"
              placeholder="Enter name"
              value="Read-only"
            />
            <TextField
              type="password"
              label="Password"
              icon={HelpCircle}
              placeholder="Enter password"
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              helpMessage="Make it as long and as crazy as you'd like"
            />
            <TextField
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              placeholder="Enter up to 250 characters"
            />
            <TextField
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
            />
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
            />
            <TextField
              startAdornment={<User aria-hidden />}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
            />
            <TextField
              endAdornment={<User aria-hidden />}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
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
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
              color="inverse"
            />
            <TextField
              disabled
              label="Disabled"
              placeholder="Enter name"
              color="inverse"
            />
            <TextField
              readOnly
              label="Read Only"
              placeholder="Enter name"
              color="inverse"
              value="Read-only"
            />
            <TextField
              type="password"
              label="Password"
              icon={HelpCircle}
              placeholder="Enter password"
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              helpMessage="Make it as long and as crazy as you'd like"
              color="inverse"
            />
            <TextField
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              placeholder="Enter up to 250 characters"
              color="inverse"
            />
            <TextField
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
              color="inverse"
            />
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
              color="inverse"
            />
            <TextField
              startAdornment={<IconButton aria-label="Mail" icon={Mail} />}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
              color="inverse"
            />
            <TextField
              endAdornment={<IconButton aria-label="Mail" icon={Mail} />}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
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
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
              color="inverse"
            />
            <TextField
              disabled
              label="Disabled"
              placeholder="Enter name"
              color="inverse"
            />
            <TextField
              readOnly
              label="Read Only"
              placeholder="Enter name"
              color="inverse"
              value="Read-only"
            />
            <TextField
              type="password"
              label="Password"
              icon={HelpCircle}
              placeholder="Enter password"
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              helpMessage="Make it as long and as crazy as you'd like"
              color="inverse"
            />
            <TextField
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              placeholder="Enter up to 250 characters"
              color="inverse"
            />
            <TextField
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
              color="inverse"
            />
            <TextField
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
              color="inverse"
            />
            <BrowserRouter>
              <TextField
                startAdornment={
                  <IconButtonLink aria-label="Check" icon={Lock} to="" />
                }
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                label=""
                aria-label="Name"
                color="inverse"
              />
              <TextField
                endAdornment={
                  <IconButtonLink aria-label="Check" icon={Lock} to="" />
                }
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                label=""
                aria-label="Name"
                color="inverse"
              />
            </BrowserRouter>
          </FormBox>
        </Container>
      </Container>
    </React.Fragment>
  );
};

const TextFieldStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <Container
      containerStyles={{
        background: '#fff',
        flex: 1,
        flexFlow: 'column',
        padding: 0,
      }}
    >
      <FormBox padding={2}>
        <TextField
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          label="Name"
        />
        <TextField disabled label="Disabled" placeholder="Enter name" />
        <TextField
          readOnly
          label="Read Only"
          placeholder="Enter name"
          value="Read-only"
        />
        <TextField
          type="password"
          label="Password"
          icon={HelpCircle}
          placeholder="Enter password"
          tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
          helpMessage="Make it as long and as crazy as you'd like"
        />
        <TextField
          label="Full Width"
          icon={HelpCircle}
          secondaryLabel="Optional"
          fullWidth
          placeholder="Enter up to 250 characters"
          tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
        />
        <TextField
          label="Name"
          hasError
          placeholder="Required"
          errorMessage="This is required!"
        />
      </FormBox>
    </Container>
  );
};

const InverseTextFieldStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <React.Fragment>
      <Container
        containerStyles={{
          background: '#484049',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <TextField
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Name"
            color="inverse"
          />
          <TextField
            disabled
            label="Disabled"
            placeholder="Enter name"
            color="inverse"
          />
          <TextField
            readOnly
            label="Read Only"
            placeholder="Enter name"
            color="inverse"
            value="Read-only"
          />
          <TextField
            type="password"
            label="Password"
            icon={HelpCircle}
            placeholder="Enter password"
            tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
            helpMessage="Make it as long and as crazy as you'd like"
            color="inverse"
          />
          <TextField
            label="Full Width"
            icon={HelpCircle}
            secondaryLabel="Optional"
            fullWidth
            tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
            placeholder="Enter up to 250 characters"
            color="inverse"
          />
          <TextField
            label="Name"
            hasError
            placeholder="Required"
            errorMessage="This is required!"
            color="inverse"
          />
        </FormBox>
      </Container>
    </React.Fragment>
  );
};

storiesOf('Form Components/TextField', module)
  .add('All', () => <AllTextFieldsStory />, { readme: { content: defaultMd } })
  .add('Default', () => <TextFieldStory />, { readme: { content: defaultMd } })
  .add('Inverse', () => <InverseTextFieldStory />, {
    readme: { content: defaultMd },
  });
