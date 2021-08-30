import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  Alert,
  AlertActionsRow,
  AlertBody,
  AlertIcon,
} from '../../../src/components/Alert';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../../../src/components/Button';
import { ButtonLink } from '../../../src/components/ButtonLink';
import { IconButton } from '../../../src/components/IconButton';
import { Text } from '../../../src/components/Text';
import { Container } from '../../storyComponents/Container';
import {
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
  X,
} from '@lifeomic/chromicons';
import defaultMd from './default.md';

const AlertStory: React.FC = () => (
  <BrowserRouter>
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <Alert>
          <AlertIcon icon={Info} />
          <AlertBody>
            <Text size="subbody">This is the latest version of Chroma.</Text>
          </AlertBody>
        </Alert>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert>
          <AlertIcon icon={Info} />
          <AlertBody>
            <Text size="subbody" weight="bold">
              You are on the latest version!
            </Text>
            <Text size="caption">
              The latest version of Chroma is 9999.9.9.9
            </Text>
          </AlertBody>
        </Alert>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert statusType="success">
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
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert statusType="warning">
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
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert statusType="error">
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
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert statusType="error">
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
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert statusType="success">
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
      </div>

      <div style={{ marginBottom: '1rem', maxWidth: '48rem', width: '100%' }}>
        <Alert fullWidth>
          <AlertIcon icon={Info} />
          <AlertBody spaceBetween>
            <Text size="subbody">
              The latest version of Chroma is 9999.9.9.9
            </Text>
            <Button variant="text">Details</Button>
          </AlertBody>
        </Alert>
      </div>

      <div style={{ marginBottom: '1rem', maxWidth: '48rem', width: '100%' }}>
        <Alert fullWidth>
          <AlertIcon icon={Info} />
          <AlertBody spaceBetween>
            <Text size="subbody">
              The latest version of Chroma is 9999.9.9.9
            </Text>
            <IconButton aria-label="Dismiss" icon={X} size={0} />
          </AlertBody>
        </Alert>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert>
          <AlertIcon icon={Info} />
          <AlertBody>
            <Text size="subbody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AlertBody>
        </Alert>
      </div>
    </Container>
  </BrowserRouter>
);

storiesOf('Components/Alert', module).add('Default', () => <AlertStory />, {
  readme: { content: defaultMd },
});
