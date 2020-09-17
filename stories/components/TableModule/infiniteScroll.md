# Table Module + Infinite Scroll Recipe

The Table Module does not support infinite scroll out of the box, but here is a
quick recipe on it to play nicely with the table. If you'd like to assist in
making infinite scroll baked in, check out
[this jira issue](https://lifeomic.atlassian.net/browse/CHROM-54).

<!-- STORY -->

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

### Leverage InfiniteScroll

`scrollOffset` can be a bit tricky and depends on the container you're rendering
this inside of. The best way to test is to open up your dev tools and ensure the
fetch only happens once. Then scroll your results and make sure only one fetch
happens. If on initial load, you end up with more than one API request, you'll
definitely want to play with this number.

```js
import { InfiniteScroll } from '@lifeomic/chroma-react/components/InfiniteScroll';
```

```jsx
<InfiniteScroll
  loading={isFetching}
  hasNextPage={hasNextToken}
  loadMore={loadMore}
  scrollOffset={1000}
  scrollContainer="parent"
>
  <TableModule config={config} data={data} isLoading={isFetching} />
</InfiniteScroll>
```

### Leverage the hook

In theory, leveraging the infinite scroll hook directly would work as well.

```js
import useInfiniteScroll from '@lifeomic/chroma-react/hooks/events/useInfiniteScroll';

const infiniteRef = useInfiniteScroll({ ...props });
```

```jsx
<TableModule ref={infiniteRef} />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
