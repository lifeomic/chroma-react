import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { InfiniteScroll } from '../../../src/components/InfiniteScroll';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

let i = 0;
const getPage = () => new Array(30).fill(null).map(() => i++);

const InfiniteScrollStory: React.FC = () => {
  const [items, setItems] = React.useState(getPage());
  const [loading, setLoading] = React.useState(false);

  const loadMore = async () => {
    // toggle loading to trigger 'listen' state transitions in InfiniteScroll
    setLoading(true);
    setItems(items.concat(getPage()));
    setLoading(false);
  };

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          border: '1px solid gray',
          height: 300,
          width: 150,
        }}
      >
        <div
          style={{
            flex: '1 1 auto',
            overflowY: 'scroll',
          }}
        >
          <InfiniteScroll
            loading={loading}
            hasNextPage={true}
            loadMore={loadMore}
            scrollOffset={150}
            debounceInterval={250}
            scrollContainer="parent"
          >
            {items.map((item) => (
              <p style={{ textAlign: 'center' }}>{item}</p>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </Container>
  );
};

storiesOf('Components/InfiniteScroll', module).add(
  'Default',
  () => <InfiniteScrollStory />,
  {
    readme: {
      content: md,
    },
  }
);
