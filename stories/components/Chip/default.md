# Chip

The Chip component is used for labeling items, tracking selected items in a
list, etc.

## Import

```js
import { Chip } from '@lifeomic/chroma-react/components/Chip';
```

<!-- STORY -->

## Usage

### Label

The text to display inside of the Chip.

```jsx
<Chip label="Chroma" />
```

### On Delete

The function to call when the removal button is clicked. Note that this does not
actually do anything to the Chip component, removing the element from the DOM is
up to the consumer to take care of.

```jsx
<Chip onDelete={() => console.log('will delete')} label="Chroma" />
```

To display a Chip, but not display the removal button, do not provide this prop.

### Disable Delete

The removal button can be disabled.

```jsx
<Chip
  disableDelete={true}
  onDelete={() => console.log('will delete')}
  label="Chroma"
/>
```

### Class Name

A class name can be provided.

```jsx
<Chip className="mr-4" />
```

## Accessibility

- The Chip has a `tabIndex` set so it can be tabbed into.
  - Pressing `Tab` again, will set focus to the removal button.
  - When the removal button is focused, pressing `Space` or `Enter` triggers the
    click action.
- The Chip has `aria-label` set to the provided label.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Chip/Chip.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Chip/Chip.stories.tsx)
