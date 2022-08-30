import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Alert } from './Alert';
import { AlertIcon } from './AlertIcon';
import { AlertBody } from './AlertBody';
import { Text } from '../Text';
import {
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
  X,
} from '@lifeomic/chromicons';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { AlertActionsRow } from './AlertActionsRow';
import { ButtonLink } from '../ButtonLink';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Alert>;

export const Basic: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={Info} />
      <AlertBody>
        <Text size="subbody">This is the latest version of Chroma.</Text>
      </AlertBody>
    </Alert>
  );
};

export const MultiLine: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={Info} />
      <AlertBody>
        <Text size="subbody" weight="bold">
          You are on the latest version!
        </Text>
        <Text size="caption">The latest version of Chroma is 9999.9.9.9</Text>
      </AlertBody>
    </Alert>
  );
};

export const Success: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={CheckCircle} />
      <AlertBody>
        <Text size="subbody" weight="bold">
          Order complete!
        </Text>
        <Text size="caption">
          We will send you your tracking information via email.
        </Text>
      </AlertBody>
    </Alert>
  );
};
Success.args = {
  statusType: 'success',
};
Success.parameters = {
  docs: {
    description: {
      story: 'The status types line up with the Snackbar component.',
    },
  },
};

export const Warning: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={AlertTriangle} />
      <AlertBody>
        <Text size="subbody" weight="bold">
          Uh oh!
        </Text>
        <Text size="caption">
          Looks like you may need to review something...
        </Text>
      </AlertBody>
    </Alert>
  );
};
Warning.args = {
  statusType: 'warning',
};

export const Error: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={XCircle} />
      <AlertBody>
        <Text size="subbody" weight="bold">
          Access Denied
        </Text>
        <Text size="caption">
          You do not have the permissions to perform this action.
        </Text>
      </AlertBody>
    </Alert>
  );
};
Error.args = {
  statusType: 'error',
};

export const ErrorList: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={XCircle} />
      <AlertBody>
        <Text size="subbody" weight="bold">
          There were a few errors with submitting your order
        </Text>
        <ul>
          <li>You did not provide your address</li>
          <li>You did not provide your email</li>
          <li>You did not provide a backup email</li>
        </ul>
      </AlertBody>
    </Alert>
  );
};
ErrorList.args = {
  statusType: 'error',
};
ErrorList.parameters = {
  docs: {
    description: {
      story: 'For Alerts with lists, you can leverage `ul` and `li` elements.',
    },
  },
};

export const ActionsRow: ComponentStory<typeof Alert> = (args) => {
  return (
    <BrowserRouter>
      <Alert {...args}>
        <AlertIcon icon={CheckCircle} />
        <AlertBody>
          <Text size="subbody" weight="bold">
            Order complete!
          </Text>
          <Text size="caption">
            We will send you your tracking information via email.
          </Text>
          <AlertActionsRow>
            <ButtonLink to="/home" variant="text">
              View Status
            </ButtonLink>
            <Button variant="text">Dismiss</Button>
          </AlertActionsRow>
        </AlertBody>
      </Alert>
    </BrowserRouter>
  );
};
ActionsRow.args = {
  statusType: 'success',
};
ActionsRow.parameters = {
  docs: {
    description: {
      story:
        'For Alerts with multiple action buttons, leverage the `AlertActionsRow` component.',
    },
  },
};

export const RightButton: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={Info} />
      <AlertBody spaceBetween>
        <Text size="subbody">The latest version of Chroma is 9999.9.9.9</Text>
        <Button variant="text">Details</Button>
      </AlertBody>
    </Alert>
  );
};
RightButton.args = {
  fullWidth: true,
};
RightButton.parameters = {
  docs: {
    description: {
      story:
        'Alerts with a single action button _do not_ need to leverage the `AlertActionsRow`. Instead, they can inline the button in the `AlertBody`.',
    },
  },
};

export const Dismissible: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={Info} />
      <AlertBody spaceBetween>
        <Text size="subbody">The latest version of Chroma is 9999.9.9.9</Text>
        <IconButton aria-label="Dismiss" icon={X} size={0} />
      </AlertBody>
    </Alert>
  );
};
Dismissible.args = {
  fullWidth: true,
};

export const LongText: ComponentStory<typeof Alert> = (args) => {
  return (
    <Alert {...args}>
      <AlertIcon icon={Info} />
      <AlertBody>
        <Text size="subbody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </AlertBody>
    </Alert>
  );
};
