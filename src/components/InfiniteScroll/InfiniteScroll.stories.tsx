import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfiniteScroll } from './InfiniteScroll';

export default {
  title: 'Components/InfiniteScroll',
  component: InfiniteScroll,
  argTypes: {},
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
} as ComponentMeta<typeof InfiniteScroll>;

let i = 0;
const getPage = () => new Array(30).fill(null).map(() => i++);
const Template: ComponentStory<typeof InfiniteScroll> = (args) => {
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

export const Default = Template.bind({});
Default.args = {
  scrollContainer: 'parent',
  hasNextPage: true,
};
