# Link

Semantically renders an `<a>`, providing some built-in attributes around `rel`
for security purposes.

## Import

```js
import { Link } from '@lifeomic/chroma-react/components/Link';
```

<!-- STORY -->

## Usage

```jsx
<Link to="/foo">LifeOmic</Link>
```

### Opens in New Tab

When a link needs to open in a new tab the `newTab` prop can be utilized.

```jsx
<Link to="/bar" newTab />
```

### Color

Applies the color to the element.

```jsx
<Link to="/bar" color="inverse" />
<Link to="/bar" color="negative" />
<Link to="/bar" color="positive" />
```

### Class Name

A class name can be provided.

```jsx
<Link className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Link/Link.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Link/Link.stories.tsx)
