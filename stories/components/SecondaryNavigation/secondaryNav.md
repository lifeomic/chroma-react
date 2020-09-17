# Secondary Navigation

A component used for secondary navigation on a page.

<!-- STORY -->

## Import

```js
import { SecondaryNavigation } from '@lifeomic/chroma-react/components/SecondaryNavigation';
```

## Usage

This component example shows using `SecondaryNavigationItem`s to render the
links inside of the navigation element; however, this is not required, although
suggested. If `NavigationItem` is used, this means your app has a dependency on
react-router-dom. It must be wrapped by a `Router` of some sort.

```js
<SecondaryNavigation>
  <SecondaryNavigationItem to="/link-1" label="Link 1" />
  <SecondaryNavigationItem to="/link-2" label="Link 2" />
</SecondaryNavigation>
```

### Class Name

A class name can be provided.

```jsx
<SecondaryNavigation className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SecondaryNavigation/SecondaryNavigation.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SecondaryNavigation/SecondaryNavigation/stories.tsx)
