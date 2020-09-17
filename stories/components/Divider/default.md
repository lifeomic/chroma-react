# Divider

A `Divider` is a thin line that groups content in lists and layouts. The divider
renders as an `<hr>`.

<!-- STORY -->

## Import

```js
import { Divider } from '@lifeomic/chroma-react/components/Divider';
```

## Usage

```jsx
<p>Your content here</p>
<Divider />
<p>Your content here</p>
<Divider />
<p>Your content here</p>
```

### Color

`Divider` supports a `color` prop for dividers appearing over darker
backgrounds.

```jsx
<Divider color="inverse" />
```

### Direction

A direction can be applied. Valid options are `row` or `column`.

```jsx
<Divider direction="row" />
```

### Class Name

A class name can be provided.

```jsx
<Divider className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Divider/Divider.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Divider/Divider.stories.tsx)
