# Page Layout with Center + Actions

`<PageLayout>` is a wrapper around `<PageHeader>` and exposes the `actions` and
`center` props. Provide `headerCenter`, `headerCenterClassName`, and
`headerActions` to pass these props down into the `PageLayout` component.

The `headerCenter` content will begin to wrap, depending on the resolution of
the device.

<!-- STORY -->

## Import

```js
import { PageLayout } from '@lifeomic/chroma-react/components/PageLayout';
```

## Usage

```js
<PageLayout
  title="Header"
  headerAlign="center"
  headerCenter={<Text>Centered Content</Text>}
  headerActions={<Button>Edit</Button>}
>
  <PageLayoutContent />
</PageLayout>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PageLayout/PageLayout.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PageLayout/PageLayout.stories.tsx)
