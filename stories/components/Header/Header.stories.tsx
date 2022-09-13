import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Avatar } from '../../../src/components/Avatar';
import { Button } from '../../../src/components/Button';
import { Header } from '../../../src/components/Header';
import { Logo } from '../../storyComponents/Logo';
import md from './default.md';

const DefaultHeaderStory: React.FunctionComponent = () => (
  <Header
    centerLogo={true}
    logo={<Logo />}
    left={<Button variant="text">Account 1</Button>}
    right={<Avatar size={0} name="Tony" />}
  />
);

storiesOf('Old Components/Header', module).add(
  'Default',
  () => <DefaultHeaderStory />,
  {
    readme: { content: md },
  }
);
