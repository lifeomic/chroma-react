import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from '../../../src/components/Link';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const LinkStory: React.FC = () => (
  <BrowserRouter>
    <Container
      containerStyles={{
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
      }}
    >
      <Link to="#">Link</Link>
      <Link to="https://www.lifeomic.com" newTab>
        Link (Opens in New Tab)
      </Link>
      <div
        style={{
          background: '#006eb7',
          padding: '16px 64px',
          textAlign: 'center',
        }}
      >
        <Link to="#" color="inverse">
          Link
        </Link>
      </div>
      <Link to="#" color="negative">
        Link
      </Link>
      <Link to="#" color="positive">
        Link
      </Link>
    </Container>
  </BrowserRouter>
);

storiesOf('Old Components/Link', module).add('Default', () => <LinkStory />, {
  readme: { content: md },
});
