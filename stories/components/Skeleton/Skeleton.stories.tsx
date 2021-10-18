import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Skeleton } from '../../../src/components/Skeleton';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const SkeletonStory: React.FC = () => (
  <Container
    containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
  >
    <Container
      containerStyles={{ alignItems: 'center', flex: 1, flexFlow: 'column' }}
    >
      <Container>
        <Skeleton animation="pulse" height={70} width={70} variant="circle" />
        <Container
          containerStyles={{
            flex: 1,
            flexFlow: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Skeleton
            animation="pulse"
            height={10}
            width={100}
            variant="rectangle"
          />
          <Skeleton
            animation="pulse"
            height={10}
            width={120}
            variant="rectangle"
          />
        </Container>
      </Container>
      <Skeleton animation="pulse" height={50} width={220} variant="rectangle" />
    </Container>

    <Container
      containerStyles={{ alignItems: 'center', flex: 1, flexFlow: 'column' }}
    >
      <Container>
        <Skeleton animation="shine" height={70} width={70} variant="circle" />
        <Container
          containerStyles={{
            flex: 1,
            flexFlow: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Skeleton
            animation="shine"
            height={10}
            width={100}
            variant="rectangle"
          />
          <Skeleton
            animation="shine"
            height={10}
            width={120}
            variant="rectangle"
          />
        </Container>
      </Container>
      <Skeleton animation="shine" height={50} width={220} variant="rectangle" />
    </Container>

    <Container
      containerStyles={{ alignItems: 'center', flex: 1, flexFlow: 'column' }}
    >
      <Container>
        <Skeleton animation="none" height={70} width={70} variant="circle" />
        <Container
          containerStyles={{
            flex: 1,
            flexFlow: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Skeleton
            animation="none"
            height={10}
            width={100}
            variant="rectangle"
          />
          <Skeleton
            animation="none"
            height={10}
            width={120}
            variant="rectangle"
          />
        </Container>
      </Container>
      <Skeleton animation="none" height={50} width={220} variant="rectangle" />
    </Container>
  </Container>
);

storiesOf('Components/Skeleton', module).add(
  'Default',
  () => <SkeletonStory />,
  {
    readme: { content: md },
  }
);
