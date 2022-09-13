import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { DotLoader } from '../../../src/components/DotLoader';
import { makeStyles } from '../../../src/styles';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const useStyles = makeStyles((theme) => ({
  dotStyle: { fill: theme.palette.green.main },
}));

const DotLoaderStory: React.FC = () => (
  <Container
    containerStyles={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <DotLoader size={0} />
    <p>size=0</p>
    <DotLoader size={1} />
    <p>size=1</p>
    <DotLoader size={1} dotStyle={useStyles({}).dotStyle} />
    <p>{'dotStyle={dotStyleClassValue}'}</p>
  </Container>
);

storiesOf('Old Components/DotLoader', module).add(
  'Default',
  () => <DotLoaderStory />,
  {
    readme: { content: defaultMd },
  }
);
