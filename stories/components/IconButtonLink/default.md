# Icon Button Link

An element that appears as an Icon Button component, but is a link underneath
the covers. It has the same properties as Icon Button exposed.

**:exclamation:Requirement:exclamation::** This component has a dependency on
react-router-dom. It must be wrapped by a `Router` of some sort.

## Import

```js
import { IconButtonLink } from '@lifeomic/chroma-react/components/IconButtonLink';
```

<!-- STORY -->

## Usage

**Note:** All required props for Icon Button are also required for Icon Button
Link.

### To

#### Internal href

The Icon Button Link component requires a "to" prop for the URL it should link
to. By default, the component will generate a typical link.

```jsx
<IconButtonLink aria-label="Edit" icon={Edit} to="/foo" />
```

#### External href

By default, the Icon Button Link component will generate an "external" link when
the "to" prop begins with "https".

```jsx
<IconButtonLink aria-label="Edit" icon={Edit} to="https://www.lifeomic.com" />
```

When an external link is detected, it will auto-add the `target` and `rel`
attributes as well.

To provide a link to an external href, but without opening a new tab, provide
the "target" prop.

```jsx
<IconButtonLink
  aria-label="Edit"
  icon={Edit}
  target="_self"
  to="https://www.lifeomic.com"
/>
```

### A Direct Icon Button Extension

This component is a direct extension of the Icon Button component. The following
props are also available to Icon Button Link:

- className
- color
- aria-label
- size
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight

## Accessibility

- The element is an `<a>` tag.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconButtonLink/IconButtonLink.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconButtonLink/IconButtonLink.stories.tsx)
