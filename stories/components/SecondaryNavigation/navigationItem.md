# Secondary Navigation Item

A component wrapping a `NavLink` from `react-router-dom`. Secondary Navigation
Item to be used with the `SecondaryNavigation` component.

<!-- STORY -->

## Import

```tsx
import { SecondaryNavigationItem } from '@lifeomic/chroma-react/components/SecondaryNavigation';
```

## Usage

**:exclamation:Requirement:exclamation::** This component has a dependency on
react-router-dom. It must be wrapped by a `Router` of some sort.

```js
<SecondaryNavigationItem to="/link-1" label="Link 1" />
```

### Class Name

A class name can be provided.

```jsx
<SecondaryNavigationItem className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SecondaryNavigation/SecondaryNavigationItem.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SecondaryNavigation/SecondaryNavigation.stories.tsx)
