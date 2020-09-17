# Primary Navigation Subrouting

Combining PrimaryNavigationExpansionItem and PrimaryNavigationSubItem allows for
consumers to create an expansion-panel-esque component in their navigation bar.
The current pattern is that clicking the root path will navigate users to the
root/dashboard view. Child routes navigation items are then rendered below.
Navigating away from the "rootParentPath" closes the expansion-panel route item.

<!-- STORY -->

## Import

```js
import {
  PrimaryNavigationExpansionItem,
  PrimaryNavigationSubItem,
} from '@lifeomic/chroma-react/components/PrimaryNavigation';
```

## Usage

These components must be used in combination with PrimaryNavigation.

```jsx
<PrimaryNavigationExpansionItem
  icon={<Icon />}
  label="Base Route"
  to="/base"
  rootParentPath="/base"
>
  <PrimaryNavigationSubItem label="Child Route1" to="/base/c1" />
  <PrimaryNavigationSubItem label="Child Route2" to="/base/c2" />
</PrimaryNavigationExpansionItem>
```

### PrimaryNavigationExpansionItem rootParentPath

This should be the base-route path for all children inside of this component.
The component will use this route to determine when the component is expanded or
collapsed. If the current browser location includes the `rootParentPath`, the
panel will be expanded; otherwise, it will be collapsed.

### PrimaryNavigationSubItem

The Primary Navigation Sub Item component is a direct extension of Primary
Navigation Item. The only difference is this component does not currently accept
an `icon` prop.

### Class Name

A class name can be provided to both components.

```jsx
<PrimaryNavigationExpansionItem className="mr-4"  />
<PrimaryNavigationSubItem className="mr-4"  />
```

## Links

- [PrimaryNavigationExpansionItem Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PrimaryNavigation/PrimaryNavigationExpansionItem.tsx)
- [PrimaryNavigationSubItem Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PrimaryNavigation/PrimaryNavigationSubItem.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PrimaryNavigation/PrimaryNavigation.stories.tsx)
