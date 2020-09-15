import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { baseBoxShadows } from '../../../src/styles/createBoxShadows';
import md from './default.md';

interface BaseBoxProps {
  name: string;
  shadow: string;
}

const BaseBox: React.FunctionComponent<BaseBoxProps> = ({ name, shadow }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '12rem',
      height: '12rem',
      boxShadow: shadow,
      marginBottom: '3rem',
      fontWeight: 'bold',
    }}
  >
    {name}
  </div>
);

const ShadowStory: React.FunctionComponent = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    {Object.entries(baseBoxShadows).map(([key, value]) => (
      <BaseBox key={key} name={key} shadow={value} />
    ))}
  </div>
);

storiesOf('Styles/Shadows', module).add('Shadows', () => <ShadowStory />, {
  readme: { content: md },
});
