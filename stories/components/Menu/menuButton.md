# Menu Button

A Button element to be used within a Menu component **only**. It allows for
icons on both sides of the text.

## Import

```js
import { MenuButton } from '@lifeomic/chroma-react/components/Menu';
```

<!-- STORY -->

## Usage

### Extends Button

The Menu Button component extends the Chroma Button. All props defined and used
for that component are also available here.

### Icon

The Menu Button component takes an `icon` prop. It's recommended to use the
[Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.

```jsx
<Menu
 anchorElement={
   <MenuButton icon={Edit}>Menu Button</MenuButton>
 }>
```

### Trailing Icon

The Menu Button component takes a `trailingIcon` prop. This icon will be
rendered after the text. It's recommended to use the Chroma icon set. This icon
is normally a chevron icon.

```jsx
<Menu
 anchorElement={
   <MenuButton icon={Edit} trailingIcon={ChevronDown}>Menu Button</MenuButton>
 }>
```

## Accessibility

- The Menu Button has the same accessibility traits as Button

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Menu/MenuButton.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Menu/MenuButton.stories.tsx)
