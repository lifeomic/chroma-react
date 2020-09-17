import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  SecondaryNavigation,
  SecondaryNavigationItem,
  SecondaryNavigationProps,
} from '../../../src/components/SecondaryNavigation';
import { spacing } from '../../storyStyles';
import navigationMd from './navigationItem.md';
import navMd from './secondaryNav.md';

const getPropOptions = (): SecondaryNavigationProps => {
  return {
    variant: boolean('horizontal', false) ? 'horizontal' : 'vertical',
  };
};

const NavigationItemStory: React.FunctionComponent = () => (
  <ul
    style={{
      padding: spacing[0],
      listStyle: 'none',
      width: '7rem',
    }}
  >
    <BrowserRouter>
      <SecondaryNavigationItem to="" label="Link 1" />
      <SecondaryNavigationItem to="" label="Link 2" />
    </BrowserRouter>
  </ul>
);

const SecondaryNavigationStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <div style={{ width: '13.5rem' }}>
      <SecondaryNavigation {...getPropOptions()}>
        <SecondaryNavigationItem to="/bar" label="Link 1" />
        <SecondaryNavigationItem to="/foo" label="Link 2" />
      </SecondaryNavigation>
    </div>
  </BrowserRouter>
);

storiesOf('Components/Secondary Navigation', module)
  .add('Secondary Navigation Item', () => <NavigationItemStory />, {
    readme: { content: navigationMd },
  })
  .add('Secondary Navigation', () => <SecondaryNavigationStory />, {
    readme: { content: navMd },
  });
