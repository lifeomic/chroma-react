# Search Field

An input for providing search functionality. The Search Field user experience
is:

- Input receives focus
- User begins typing and the search magnifying glass becomes an "x" to clear the
  input
- If the user clicks the "x", the input will be cleared
- To submit the search, the user presses the Enter key on their keyboard
- Upon submission, the input field is cleared. The expected behavior is that the
  UI will prompt the user that a search has occurred with the string of text
  they have entered. This can be done with a Pill or Chip component.

If you'd prefer overriding this UX, provide the `disableClearOnSearch` prop as
described below.

<!-- STORY -->

## Import

```js
import { SearchField } from '@lifeomic/chroma-react/components/SearchField';
```

## Usage

```jsx
const handleSearchEnter = (value: string) => {
  console.log(`Search entered with ${value}`);
};

return (
  <SearchField placeholder="Search for&hellip;" onSearch={handleSearchEnter} />
);
```

### aria-label (required)

A descriptive label for the SearchField input.

```jsx
<SearchField aria-label="Search field" />
```

### Keyboard Support

This component mimics a default `<input type="search" />` component:

- The Escape key will clear the input.
- The Enter key will submit the text.

### Placeholder

The placeholder text to display.

```jsx
<SearchField placeholder="Search for&hellip;" />
```

### On Search

The function called when the user enters text into the input and then presses
the ENTER key.

```jsx
<SearchField onSearch={(value) => console.log(value)} />
```

### Disable Clear on Search

The default behavior of the component is to clear the text entry when the ENTER
key is pressed. This behavior can be overriden though, in cases where you don't
want that to happen via the `disableClearOnSearch` prop. By providing this prop,
the text entered into the field will remain visible after the ENTER key is
pressed. The user can then manually click the clear button to wipe the input (or
ESC on their keyboard).

```jsx
<SearchField onSearch={handleSearchEnter} disableClearOnSearch />
```

### On Clear

The function called when the user manually clicks the clear button. Is only
called when `disableClearOnSearch` is provided as well.

```jsx
<SearchField
  onClear={() => console.log('search was cleared!')}
  disableClearOnSearch
/>
```

### Height

The component takes a height prop to control the height of the element. If you'd
prefer a shorter height, use `height={0}`. The default is `height={1}`.

```jsx
<SearchField height={0} />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the component.

```jsx
<SearchField helpMessage="Some helper text!" />
```

### Color

Applies the color to the element.

```jsx
<SearchField color="inverse" />
```

### Accessibility

- The component has `type="search"`.
- The component has `aria-label` set to the provided label.
- The component uses a uniqueId to link the input to the help message via
  `aria-describedby`. This allows screenreaders to read the help message.
- The icon button cannot be tabbed into - keyboard support of Escape to clear
  and Enter to submit is supported instead. This mimics the default
  `<input type="search" />` behavior.
- The inner icon has `aria-hidden` and `role="img"` attributes.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SearchField/SearchField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SearchField/SearchField.stories.tsx)
