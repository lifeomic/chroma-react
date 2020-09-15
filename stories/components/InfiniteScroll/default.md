# InfiniteScroll

The InfiniteScroll component provides endless scroll behavior. It is a thin
wrapper with hooks that detect if the element is in view, whether to fetch more
results based on position offset relative to the parent, etc.

<!-- STORY -->

## Import

```js
import { InfiniteScroll } from '@lifeomic/chroma-react/components/InfiniteScroll';
```

## Usage

```jsx
<InfiniteScroll
  className="optional-className"
  loading={loading}
  hasNextPage={pageInfo.hasNextPage}
  loadMore={loadMore}
  scrollOffset={500}
  scrollContainer="parent"
>
  <FeedsList
    loading={loading}
    error={error}
    feedEntries={feedEntries}
    loadMore={loadMore}
    hasMore={pageInfo.hasNextPage}
  />
</InfiniteScroll>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/InfiniteScroll/InfiniteScroll.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/InfiniteScroll/InfiniteScroll.stories.tsx)
