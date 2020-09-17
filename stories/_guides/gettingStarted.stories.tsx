import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Noop } from '../storyComponents/Noop';
import installMd from './install.md';
import overviewMd from './overview.md';
import themingMd from './theming.md';
import componentThemingMD from './componentTheming.md';

storiesOf('Chroma/Getting Started', module)
  .add('1. Overview', () => <Noop />, {
    readme: { content: overviewMd },
  })
  .add('2. Installation', () => <Noop />, {
    readme: { content: installMd },
  })
  .add('3. Theming', () => <Noop />, {
    readme: { content: themingMd },
  })
  .add('4. Component Theming', () => <Noop />, {
    readme: { content: componentThemingMD },
  });
