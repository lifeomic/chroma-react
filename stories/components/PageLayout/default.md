# Page Layout

A layout component for content pages within any LifeOmic application. It is
recommended this component is the first child of a `<main>` element. The primary
goal of this component is to create consistency in an application, so that each
main content area is the same from a layout-perspective. There are plenty of
options that can be provided to the component, so take a look at the different
stories in this section for more information.

<!-- STORY -->

## Import

```js
import { PageLayout } from '@lifeomic/chroma-react/components/PageLayout';
```

## Usage

```jsx
<PageLayout title="Header">
  <div>Your content</div>
</PageLayout>
```

### Removing MaxWidth

By default, a `max-width` is applied to the container. To override this
functionality:

```jsx
<PageLayout maxWidth={false}>
```

### Vertical Alignment

To vertically align content in the header section, provide:

```jsx
<PageLayout headerAlign="top">
```

Use `headerAlign="top"` when content wraps to two lines or more.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PageLayout/PageLayout.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PageLayout/PageLayout.stories.tsx)
