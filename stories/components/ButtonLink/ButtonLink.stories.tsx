import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ButtonLink } from '../../../src/components/ButtonLink';
import { Grid } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const AllButtonLinksStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container containerStyles={{ display: 'flex' }}>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <Container>
          <ButtonLink variant="text" to="/foo">
            Text ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink variant="outlined" to="/bar">
            Outlined ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink variant="contained" to="/baz">
            Contained ButtonLink
          </ButtonLink>
        </Container>
      </Container>
      <Container
        containerStyles={{ background: '#384049', flex: 1, flexFlow: 'column' }}
      >
        <Container>
          <ButtonLink variant="text" color="inverse" to="/foo">
            Text ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink variant="outlined" color="inverse" to="/bar">
            Outlined ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink variant="contained" color="inverse" to="/baz">
            Contained ButtonLink
          </ButtonLink>
        </Container>
      </Container>
    </Container>
  </BrowserRouter>
);

const TextButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container>
      <ButtonLink variant="text" to="/foo" style={{ marginRight: '1rem' }}>
        ButtonLink
      </ButtonLink>
    </Container>
    <Container>
      <ButtonLink
        variant="text"
        icon={Grid}
        to="/foo"
        style={{ marginRight: '1rem' }}
      >
        ButtonLink w/ Icon
      </ButtonLink>
    </Container>
  </BrowserRouter>
);

const OutlinedButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container>
      <ButtonLink variant="outlined" to="/foo" style={{ marginRight: '1rem' }}>
        ButtonLink
      </ButtonLink>
    </Container>
    <Container>
      <ButtonLink
        variant="outlined"
        icon={Grid}
        to="/foo"
        style={{ marginRight: '1rem' }}
      >
        ButtonLink w/ Icon
      </ButtonLink>
    </Container>
  </BrowserRouter>
);

const ContainedButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container containerStyles={{ display: 'flex' }}>
      <ButtonLink variant="contained" to="/foo" style={{ marginRight: '1rem' }}>
        ButtonLink
      </ButtonLink>
    </Container>
    <Container containerStyles={{ display: 'flex' }}>
      <ButtonLink
        variant="contained"
        to="/foo"
        icon={Grid}
        style={{ marginRight: '1rem' }}
      >
        ButtonLink w/ Icon
      </ButtonLink>
    </Container>
  </BrowserRouter>
);

const InversedButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <div style={{ background: '#384049' }}>
      <Container containerStyles={{ display: 'flex' }}>
        <ButtonLink variant="text" color="inverse" to="/foo">
          Text ButtonLink
        </ButtonLink>
      </Container>
      <Container containerStyles={{ display: 'flex' }}>
        <ButtonLink variant="outlined" color="inverse" to="/foo">
          Outlined ButtonLink
        </ButtonLink>
      </Container>
      <Container>
        <ButtonLink variant="contained" color="inverse" to="/foo">
          Contained ButtonLink
        </ButtonLink>
      </Container>
    </div>
  </BrowserRouter>
);

const NegativeButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container containerStyles={{ display: 'flex' }}>
      <ButtonLink variant="text" color="negative" to="/foo">
        Text ButtonLink
      </ButtonLink>
    </Container>
    <Container containerStyles={{ display: 'flex' }}>
      <ButtonLink variant="outlined" color="negative" to="/foo">
        Outlined ButtonLink
      </ButtonLink>
    </Container>
    <Container>
      <ButtonLink variant="contained" color="negative" to="/foo">
        Contained ButtonLink
      </ButtonLink>
    </Container>
  </BrowserRouter>
);

const PositiveButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container containerStyles={{ display: 'flex' }}>
      <ButtonLink variant="text" color="positive" to="/foo">
        Text ButtonLink
      </ButtonLink>
    </Container>
    <Container containerStyles={{ display: 'flex' }}>
      <ButtonLink variant="outlined" color="positive" to="/foo">
        Outlined ButtonLink
      </ButtonLink>
    </Container>
    <Container>
      <ButtonLink variant="contained" color="positive" to="/foo">
        Contained ButtonLink
      </ButtonLink>
    </Container>
  </BrowserRouter>
);

const DisabledButtonLinkStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <Container containerStyles={{ display: 'flex' }}>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <Container>
          <ButtonLink variant="text" to="/foo" disabled={true}>
            Text ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink variant="outlined" to="/bar" disabled={true}>
            Outlined ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink variant="contained" to="/baz" disabled={true}>
            Contained ButtonLink
          </ButtonLink>
        </Container>
      </Container>
      <Container
        containerStyles={{ background: '#384049', flex: 1, flexFlow: 'column' }}
      >
        <Container>
          <ButtonLink variant="text" color="inverse" to="/foo" disabled={true}>
            Text ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink
            variant="outlined"
            color="inverse"
            to="/bar"
            disabled={true}
          >
            Outlined ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink
            variant="contained"
            color="inverse"
            to="/baz"
            disabled={true}
          >
            Contained ButtonLink
          </ButtonLink>
        </Container>
      </Container>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <Container>
          <ButtonLink variant="text" color="negative" to="/foo" disabled={true}>
            Text ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink
            variant="outlined"
            color="negative"
            to="/bar"
            disabled={true}
          >
            Outlined ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink
            variant="contained"
            color="negative"
            to="/baz"
            disabled={true}
          >
            Contained ButtonLink
          </ButtonLink>
        </Container>
      </Container>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <Container>
          <ButtonLink variant="text" color="positive" to="/foo" disabled={true}>
            Text ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink
            variant="outlined"
            color="positive"
            to="/bar"
            disabled={true}
          >
            Outlined ButtonLink
          </ButtonLink>
        </Container>
        <Container>
          <ButtonLink
            variant="contained"
            color="positive"
            to="/baz"
            disabled={true}
          >
            Contained ButtonLink
          </ButtonLink>
        </Container>
      </Container>
    </Container>
  </BrowserRouter>
);

storiesOf('Components/ButtonLink', module)
  .add('Default', () => <AllButtonLinksStory />, {
    readme: { content: defaultMd },
  })
  .add('Text Variant', () => <TextButtonLinkStory />, {
    readme: { content: defaultMd },
  })
  .add('Outlined Variant', () => <OutlinedButtonLinkStory />, {
    readme: { content: defaultMd },
  })
  .add('Contained Variant', () => <ContainedButtonLinkStory />, {
    readme: { content: defaultMd },
  })
  .add('Inverse Color', () => <InversedButtonLinkStory />, {
    readme: { content: defaultMd },
  })
  .add('Negative Color', () => <NegativeButtonLinkStory />, {
    readme: { content: defaultMd },
  })
  .add('Positive Color', () => <PositiveButtonLinkStory />, {
    readme: { content: defaultMd },
  })
  .add('Disabled', () => <DisabledButtonLinkStory />, {
    readme: { content: defaultMd },
  });
