import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { InfiniteScroll } from './InfiniteScroll';

const meta: Meta<typeof InfiniteScroll> = {
  component: InfiniteScroll,
  decorators: [
    (story) => (
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
          {story()}
        </div>
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof InfiniteScroll>;

const Template: StoryFn<typeof InfiniteScroll> = (args) => {
  let i = 0;
  const getPage = () => new Array(30).fill(null).map(() => i++);
  const [items, setItems] = React.useState(getPage());
  const [loading, setLoading] = React.useState(false);

  const loadMore = async () => {
    setLoading(true);
    setItems(items.concat(getPage()));
    setLoading(false);
  };
  return (
    <InfiniteScroll {...args} loadMore={loadMore} loading={loading}>
      {items.map((item) => (
        <p style={{ textAlign: 'center' }} key={item}>
          {item}
        </p>
      ))}
    </InfiniteScroll>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    scrollContainer: 'parent',
    hasNextPage: true,
  },
};
