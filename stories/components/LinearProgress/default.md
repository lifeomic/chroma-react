# Linear Progress

A linear progress component for showing loading states.

<!-- STORY -->

## Import

```js
import { LinearProgress } from '@lifeomic/chroma-react/components/LinearProgress';
```

## Usage

By default, the linear progress displays an empty bar.

```jsx
<LinearProgress />
```

### Value

Provide a value to the component between 0 - 100 to show progress.

```jsx
<LinearProgress value={50} />
```

### Indeterminate

If you'd like to display an indeterminate progress bar, leverage the `variant`
prop.

```jsx
<LinearProgress variant="indeterminate" />
```

## Accessibility

- The component has the `progressbar` role.
- The component specifices the `aria-valuenow`, `aria-valuemin`, and
  `aria-valuemax` attributes.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/LinearProgress/LinearProgress.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/LinearProgress/LinearProgress.stories.tsx)
