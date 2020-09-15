import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button, ButtonProps } from '../../../src/components/Button';
import { Grid } from '../../../src/icons/lined';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const getPropOptions = (): ButtonProps => {
  return {
    disabled: boolean('disabled', false),
    fullWidth: boolean('fullWidth', false),
  };
};

const AllButtonsStory: React.FunctionComponent = () => (
  <React.Fragment>
    <Container containerStyles={{ display: 'flex' }}>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <Container>
          <Button variant="text" {...getPropOptions()}>
            Text Button
          </Button>
        </Container>
        <Container>
          <Button variant="outlined" {...getPropOptions()}>
            Outlined Button
          </Button>
        </Container>
        <Container>
          <Button variant="contained" {...getPropOptions()}>
            Contained Button
          </Button>
        </Container>
      </Container>
      <Container
        containerStyles={{ background: '#384049', flex: 1, flexFlow: 'column' }}
      >
        <Container>
          <Button variant="text" color="inverse" {...getPropOptions()}>
            Text Button
          </Button>
        </Container>
        <Container>
          <Button variant="outlined" color="inverse" {...getPropOptions()}>
            Outlined Button
          </Button>
        </Container>
        <Container>
          <Button variant="contained" color="inverse" {...getPropOptions()}>
            Contained Button
          </Button>
        </Container>
      </Container>
    </Container>
  </React.Fragment>
);

const TextButtonStory: React.FunctionComponent = () => (
  <React.Fragment>
    <Container>
      <Button
        variant="text"
        {...getPropOptions()}
        style={{ marginRight: '1rem' }}
      >
        Button
      </Button>
    </Container>
    <Container>
      <Button
        variant="text"
        icon={Grid}
        {...getPropOptions()}
        style={{ marginRight: '1rem' }}
      >
        Button w/ Icon
      </Button>
    </Container>
  </React.Fragment>
);

const OutlinedButtonStory: React.FunctionComponent = () => (
  <React.Fragment>
    <Container>
      <Button
        variant="outlined"
        {...getPropOptions()}
        style={{ marginRight: '1rem' }}
      >
        Button
      </Button>
    </Container>
    <Container>
      <Button
        variant="outlined"
        icon={Grid}
        {...getPropOptions()}
        style={{ marginRight: '1rem' }}
      >
        Button w/ Icon
      </Button>
    </Container>
  </React.Fragment>
);

const ContainedButtonStory: React.FunctionComponent = () => (
  <React.Fragment>
    <Container containerStyles={{ display: 'flex' }}>
      <Button
        variant="contained"
        {...getPropOptions()}
        style={{ marginRight: '1rem' }}
      >
        Button
      </Button>
    </Container>
    <Container containerStyles={{ display: 'flex' }}>
      <Button
        variant="contained"
        icon={Grid}
        {...getPropOptions()}
        style={{ marginRight: '1rem' }}
      >
        Button w/ Icon
      </Button>
    </Container>
  </React.Fragment>
);

const InversedButtonStory: React.FunctionComponent = () => (
  <React.Fragment>
    <div style={{ background: '#384049' }}>
      <Container containerStyles={{ display: 'flex' }}>
        <Button variant="text" color="inverse" {...getPropOptions()}>
          Text Button
        </Button>
      </Container>
      <Container containerStyles={{ display: 'flex' }}>
        <Button variant="outlined" color="inverse" {...getPropOptions()}>
          Outlined Button
        </Button>
      </Container>
      <Container>
        <Button variant="contained" color="inverse" {...getPropOptions()}>
          Contained Button
        </Button>
      </Container>
    </div>
  </React.Fragment>
);

storiesOf('Components/Button', module)
  .add('Default', () => <AllButtonsStory />, {
    readme: { content: defaultMd },
  })
  .add('Text Variant', () => <TextButtonStory />, {
    readme: { content: defaultMd },
  })
  .add('Outlined Variant', () => <OutlinedButtonStory />, {
    readme: { content: defaultMd },
  })
  .add('Contained Variant', () => <ContainedButtonStory />, {
    readme: { content: defaultMd },
  })
  .add('Inverse Color', () => <InversedButtonStory />, {
    readme: { content: defaultMd },
  });
