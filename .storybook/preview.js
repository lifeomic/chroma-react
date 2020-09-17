import * as React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { configureReadme, addReadme } from 'storybook-readme';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withTheme } from '../stories/decorators';
import logo from './logo.svg';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Chroma Design System',
      brandImage: logo,
    }),
    isFullscreen: false,
    panelPosition: 'right',
    hierarchyRootSeparator: /\//,
  },
  readme: {
    theme: {
      linkColor: '#00539a',
    },
    codeTheme: 'a11y-dark',
  },
});

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(withTheme);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(addReadme);

configureReadme({
  StoryPreview: ({ children }) => (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  ),
  DocPreview: ({ children }) => (
    <div style={{ margin: '1rem' }}>{children}</div>
  ),
});

configure(loadStories, module);
