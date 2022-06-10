# Pill

The Pill component is used to provide supplemental information to existing
components. Example use cases:

- Displaying the number of results returned from a search/filter query
- Displaying the number of items/pages available
- Highlighting a new feature or product announcement

<!-- STORY -->

## Import

```js
import { Pill } from '@lifeomic/chroma-react/components/Pill';
```

## Usage

### Variant

The pill component takes two variants for different styled pills.

```jsx
<Pill label="My Pill" />
<Pill variant="highlight" label="Beta" />
```

### Provide Color

Pill allows for a `color` prop to be defined.

```jsx
<Pill label="My Pill" color="primary" />
<Pill label="My Pill" color="negative" />
<Pill label="My Pill" color="positive" />
```

### Class Name

A class name can be provided.

```jsx
<Pill className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Pill/Pill.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Pill/Pill.stories.tsx)
