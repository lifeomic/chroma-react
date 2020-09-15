import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Noop } from '../storyComponents/Noop';
import introMd from './intro.md';

storiesOf('Form Components', module).add('Intro', () => <Noop />, {
  readme: { content: introMd },
});
