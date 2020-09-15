# Primary Navigation Item

A component wrapping a `NavLink` from `react-router-dom`. Navigation Item to be
used with the `PrimaryNavigation` and `LayoutManagerContext`.

If the `to` prop's value starts with _http:_ or _https:_ it will be treated as
an external link, and be opened in a new \_blank window.

**Use the "Knobs" tab to see more options with the component.**

<!-- STORY -->

## Import

```js
import { PrimaryNavigationItem } from '@lifeomic/chroma-react/components/PrimaryNavigation';
```

## Usage

PrimaryNavigationItem must be wrapped by `LayoutManagerContext`. It is
recommended that you use the `LayoutManager` component to handle this for you.

```jsx
<PrimaryNavigationItem icon={<Icon />} label="Nav Item" />
```

### Beta

A beta pill can be displayed to the right of a navigation item.

When using a beta pill with a navigation item that has longer text, you can add
a `<br>` to flow text appropriately.

```jsx
<PrimaryNavigationItem beta betaLabelText="Beta" />
```

### Class Name

A class name can be provided.

```jsx
<PrimaryNavigationItem className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PrimaryNavigation/PrimaryNavigationItem.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PrimaryNavigation/PrimaryNavigation.stories.tsx)
