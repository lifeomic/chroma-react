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
          background: '#0096e1',
          padding: '16px 64px',
          textAlign: 'center',
        }}
      >
        <Link to="#" color="inverse">
          Link
        </Link>
      </div>
    </Container>
  </BrowserRouter>
);

storiesOf('Components/Link', module).add('Default', () => <LinkStory />, {
  readme: { content: md },
});
