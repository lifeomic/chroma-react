# Layout Manager

Component typically used as an application container. It accepts a `header`, a
`sidebar`, and children to render.

<!-- STORY -->

## Import

```js
import { LayoutManager } from '@lifeomic/chroma-react/components/LayoutManager';
```

## Usage

```jsx
<LayoutManager
  header={<Header />}
  sidebar={
    <PrimaryNavigation>
      <PrimaryNavigationItem />
      <PrimaryNavigationItem />
    </Sidebar>
  }
>
  <Text>Main Content</Text>
</LayoutManager>
```

### Class Name

A class name can be provided.

```jsx
<LayoutManager className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/LayoutManager/LayoutManager.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/LayoutManager/LayoutManager.stories.tsx)
