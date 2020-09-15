# Tooltip

A popup that displays information related to an element when the element
receives keyboard focus or the mouse hovers over it.

## Import

```js
import { Tooltip } from '@lifeomic/chroma-react/components/Tooltip';
```

<!-- STORY -->

## Usage

### Title

```jsx
<Tooltip title="Tooltip">
  <Button>Button with Tooltip</Button>
</Tooltip>
```

### Placement

The Tooltip location can be customized using the placement prop.

```jsx
<Tooltip title="Tooltip" placement="right">
  <Button>Button with Tooltip</Button>
</Tooltip>
```

### Class Name

A class name can be provided.

```jsx
<Tooltip className="mr-4" />
```

## Accessibility

- Tooltip has `role="tooltip"`.
- The child element has `aria-describedby`.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Tooltip/Tooltip.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Tooltip/Tooltip.stories.tsx)
