# Page Layout with Disclaimer

The Page Layout component rendered with the optional `disclaimer`. This content
area is normally used for displaying supplemental information to users, such as
an alert box. The content sits between the header and the container for the
sidebar + children.

**Use the "Knobs" tab to see with and without the `sidebarNav` element.**

<!-- STORY -->

## Import

```js
import { PageLayout } from '@lifeomic/chroma-react/components/PageLayout';
```

## Usage

```js
<PageLayout
  title="Account 1"
  disclaimer={
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '4rem',
      }}
    >
      disclaimer content
    </div>
  }
>
  <Paper elevation={1} style={{ padding: '1rem', margin: '0 auto' }}>
    <Button variant="contained" color="primary">
      Content
    </Button>
  </Paper>
</PageLayout>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PageLayout/PageLayout.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PageLayout/PageLayout.stories.tsx)
