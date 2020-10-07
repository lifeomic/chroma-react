# Page Layout with Tabs

The Page Layout component rendered with the optional `tabs` prop.

<!-- STORY -->

## Import

```js
import { PageLayout } from '@lifeomic/chroma-react/components/PageLayout';
```

## Usage

**:exclamation:Requirement:exclamation::** This component has a dependency on
react-router-dom if used with `SecondaryNavigation` and
`SecondaryNavigationItem` components. It must be wrapped by a `Router` of some
sort.

```js
<PageLayout
  title="Project 2"
  tabs={
    <SecondaryNavigation variant="horizontal">
      <SecondaryNavigationItem to="/link-1" label="Link 1" />
      <SecondaryNavigationItem to="/link-2" label="Link 2" />
      <SecondaryNavigationItem to="/link-3" label="Link 3" />
    </SecondaryNavigation>
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
- [Secondary Navigation component](https://chroma.dev.lifeomic.com/?path=/story/components-secondary-navigation--default)
- [Secondary Navigation Item component](https://chroma.dev.lifeomic.com/?path=/story/components-secondary-navigation--default)
