import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs } from '../../../src/components/Breadcrumbs';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const BreadcrumbsStory: React.FC = () => (
  <BrowserRouter>
    <Container
      containerStyles={{ display: 'flex', justifyContent: 'flex-start' }}
    >
      <Breadcrumbs
        crumbs={[
          {
            text: 'Parent',
            url: 'root',
          },
          {
            text: 'Child',
            url: 'root/child',
          },
          {
            text: 'GrandChild',
            url: 'root/child/grand',
          },
        ]}
      />
    </Container>
  </BrowserRouter>
);

const BreadcrumbsStoryDarkBackground: React.FC = () => (
  <BrowserRouter>
    <Container
      containerStyles={{
        display: 'flex',
        justifyContent: 'flex-start',
        background: '#384049',
      }}
    >
      <Breadcrumbs
        color="inverse"
        crumbs={[
          {
            text: 'Parent',
            url: 'root',
          },
          {
            text: 'Child',
            url: 'root/child',
          },
          {
            text: 'GrandChild',
            url: 'root/child/grand',
          },
        ]}
      />
    </Container>
  </BrowserRouter>
);

storiesOf('Components/Breadcrumbs', module)
  .add('Default', () => <BreadcrumbsStory />, {
    readme: { content: defaultMd },
  })
  .add('Inverse Color', () => <BreadcrumbsStoryDarkBackground />, {
    readme: { content: defaultMd },
  });
