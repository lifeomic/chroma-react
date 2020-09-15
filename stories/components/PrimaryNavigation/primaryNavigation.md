# Primary Navigation

The Primary Navigation is not designed to be a single component, but instead a
composable navigation layout. It is an opinionated navigation solution, with a
set width, a collapsed and uncollapsed state (with a set width), and a single
content section.

Notes:

- `PrimaryNavigation` relies on LayoutManagerContext and must be wrapped by it.
  It is recommended that you use the `LayoutManager` component to handle this
  for you.
- `header` and `footer` props are both optional. They are only rendered when the
  sidebar is open.
- The `header` is rendered in a wrapping div container.
- An optional `headerMin` component is rendered in place of `header` when the
  sidebar is collapsed.

<!-- STORY -->

## Import

```js
import {
  PrimaryNavigation,
  PrimaryNavigationItem,
} from '@lifeomic/chroma-react/components/PrimaryNavigation';
```

## Usage

```jsx
<PrimaryNavigation>
  <PrimaryNavigationItem icon={<NavItemIcon1 />} label="Nav Item" />
  <PrimaryNavigationItem icon={<NavItemIcon2 />} label="Nav Item 2" />
</PrimaryNavigation>
```

## Usage with header and footer

```jsx
<PrimaryNavigation
  header={<div>optional header</div>}
  footer={<div>optional footer</div>}
>
  <PrimaryNavigationItem icon={<NavItemIcon1 />} label="Nav Item" />
  <PrimaryNavigationItem icon={<NavItemIcon2 />} label="Nav Item 2" />
</PrimaryNavigation>
```

## Usage with custom LayoutManagerContext

```jsx
<LayoutManagerContext.Provider value={{...}}>
  <PrimaryNavigation>
    <PrimaryNavigationItem icon={<NavItemIcon1 />} label="Nav Item" />
    <PrimaryNavigationItem icon={<NavItemIcon2 />} label="Nav Item 2" />
  </PrimaryNavigation>
</LayoutManagerContext.Provider>
```

### Class Name

A class name can be provided.

```jsx
<PrimaryNavigation className="mr-4" />
```

## Accessibility

- The component renders a `<nav>` element.
- The aria `role="navigation"` attribute is set.
- The navigation has aria-labels set by default.
- The toggle sidebar button has the `aria-checked` attribute set.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PrimaryNavigation/PrimaryNavigation.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PrimaryNavigation/PrimaryNavigation.stories.tsx)
