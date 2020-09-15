import { storiesOf } from '@storybook/react';
import { boolean, radios } from '@storybook/addon-knobs';
import * as React from 'react';
import { Button } from '../../../src/components/Button';
import { Snackbar, SnackbarProps } from '../../../src/components/Snackbar';
import { Container } from '../../storyComponents/Container';
import { spacing } from '../../storyStyles';
import defaultMd from './default.md';

const getPropOptions = (): SnackbarProps => {
  return {
    statusType: radios<'success' | 'info' | 'warning' | 'error'>(
      'statusType',
      {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'error',
      },
      'success'
    ),
    allowDismiss: boolean('allowDismiss', false),
  };
};

const SnackbarStory: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [showWithChildren, setShowWithChildren] = React.useState(false);

  return (
    <Container>
      <Button
        onClick={() => {
          setOpen(true);
          setShowWithChildren(false);
        }}
        style={{ marginRight: spacing[2] }}
      >
        Show Snackbar With Title
      </Button>
      <Button
        onClick={() => {
          setOpen(true);
          setShowWithChildren(true);
        }}
      >
        Show Snackbar with Children
      </Button>

      {showWithChildren ? (
        <Snackbar
          {...getPropOptions()}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <span>This is child text with a call to action</span>
          <Button style={{ marginLeft: 8 }}>Button</Button>
        </Snackbar>
      ) : (
        <Snackbar
          {...getPropOptions()}
          isOpen={open}
          title="This is a Snackbar message!"
          onClose={() => setOpen(false)}
        />
      )}
    </Container>
  );
};

const MobileSnackbarStory: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <Container>
      <Button
        onClick={() => {
          setOpen(true);
          setDisabled(true);
        }}
        disabled={disabled}
      >
        Open Me on Mobile!
      </Button>

      <Snackbar
        isOpen={open}
        title="This is a Snackbar anchored for mobile!"
        onClose={() => {
          console.log('onClose');
          setDisabled(false);
          setOpen(false);
        }}
      />
    </Container>
  );
};

storiesOf('Components/Snackbar', module)
  .add('Default', () => <SnackbarStory />, {
    readme: { content: defaultMd },
  })
  .add('Mobile', () => <MobileSnackbarStory />, {
    readme: { content: defaultMd },
  });
