# Skeleton

The Skeleton component is used as a placeholder preview before the data gets loaded to reduce load-time frustration.

<!-- STORY -->

## Import

```js
import { Skeleton } from '@lifeomic/chroma-react/components/Skeleton';
```

## Usage

```jsx
<Skeleton animation="shine" height={70} variant="circle" width={70} />
```

### Animation

Sets the keyframe animation.

```jsx
<Skeleton animation="pulse" />
<Skeleton animation="shine" />
<Skeleton animation="none" />
```

### Variant

The skeleton component takes two variants for different styled elements.

```jsx
<Skeleton variant="rectangle" />
<Skeleton variant="circle" />
```

### Height and Width

Numbers and strings are used as raw CSS. <br/>
**<em>Only one height and width property allowed.</em>**

```jsx
<Skeleton fullHeight fullWidth />
<Skeleton height={70} width="100%" />
```

### Class Name

A class name can be provided.

```jsx
<Skeleton className="mr-4" />
```

### Accessibility

- The component has the [`aria-busy`](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaBusy) attribute.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Skeleton/Skeleton.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Skeleton/Skeleton.stories.tsx)