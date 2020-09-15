import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LinearProgress } from '../../../src/components/LinearProgress';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const LinearProgressStory: React.FC = () => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container containerStyles={{ flexDirection: 'column' }}>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress />
      </div>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress value={0} />
      </div>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress value={25} />
      </div>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress value={50} />
      </div>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress value={75} />
      </div>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress value={progress} />
      </div>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <LinearProgress variant="indeterminate" />
      </div>
    </Container>
  );
};
storiesOf('Components/LinearProgress', module).add(
  'Default',
  () => <LinearProgressStory />,
  { readme: { content: defaultMd } }
);
