# Button Link

An element that appears as a Button component, but is a link. It has the same
properties as Button.

**:exclamation:Requirement:exclamation::** This component has a dependency on
react-router-dom. It must be wrapped by a `Router` of some sort.

## Import

```js
import { ButtonLink } from '@lifeomic/chroma-react-react/components/ButtonLink';
```

<!-- STORY -->

## Usage

**Note:** All required props for Icon Button are also required for Icon Button
Link.

### To

#### Internal href

The Button Link component requires a "to" prop for the URL it should link to. By
default, the component will generate a typical link.

```jsx
<ButtonLink icon={Edit} to="/foo">
  My Link
</ButtonLink>
```

#### External href

By default, the Button Link component will generate an "external" link when the
"to" prop begins with "https".

```jsx
<ButtonLink to="https://www.lifeomic.com">LifeOmic</ButtonLink>
```

When an external link is detected, it will auto-add the `target` and `rel`
attributes as well.

To provide a link to an external href, but without opening a new tab, provide
the "target" prop.

```jsx
<ButtonLink target="_self" to="https://www.lifeomic.com">
  LifeOmic
</ButtonLink>
```

### Props

The following props are available to Button Link:

- className
- color
- disabled
- fullWidth
- icon
- variant

## Accessibility

- The element is an `<a>` tag.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ButtonLink/ButtonLink.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ButtonLink/ButtonLink.stories.tsx)
