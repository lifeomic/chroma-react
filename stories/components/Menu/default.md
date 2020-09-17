# Menu

A component for rendering actionable options.

## Import

```js
import { Menu, MenuItem } from '@lifeomic/chroma-react/components/Menu';
```

<!-- STORY -->

## Usage

### aria-label (required)

A descriptive label for for the popover menu.

```jsx
<Menu aria-label="Chroma menu options" />
```

### Anchor Element

The React component the popover menu should anchor to. This is typically an Icon
Button; however, a Menu Button component is also available.

```jsx
// With IconButton
<Menu
  aria-label="Chroma menu options"
  anchorElement={
    <IconButton
      aria-label="Click to open menu"
      icon={MoreHorizontal}
    />
  }
/>

// With MenuButton
<Menu
  aria-label="Chroma menu options"
  anchorElement={
    <MenuButton
      icon={MoreHorizontal}
      trailingIcon={ChevronDown}
    >
      Open
    </MenuButton>
  }
/>
```

### Placement

The menu popover location can be adjusted.

```jsx
<Menu placement="bottom-end" />
```

### Class Name

A class name can be provided.

```jsx
<Menu className="mr-4" />
```

### Menu Items

Menus render items and are keyboard navigable.

### On Click

Menu items can specify an `onClick` prop, which will be called when the menu
item is clicked (or pressed via keyboard). The default behavior of the Menu, is
to close when a Menu Item is selected.

#### Text

A Menu Item can contain just text.

```jsx
<Menu
  aria-label="Chroma menu options"
  anchorElement={
    <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
  }
  items={[
    <MenuItem
      text="Request Download Link"
      onClick={() => console.log('Request Download Link')}
    />,
  ]}
/>
```

#### Icon

An Icon can be rendered for the Menu Item.

```jsx
<Menu
  aria-label="Chroma menu options"
  anchorElement={
    <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
  }
  items={[
    <MenuItem
      text="Request Download Link"
      icon={HelpCircle}
      onClick={() => console.log('Request Download Link')}
    />,
  ]}
/>
```

#### Children Content

Your own content can be rendered inside of a Menu Item as well.

```jsx
<Menu
  aria-label="Chroma menu options"
  anchorElement={
    <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
  }
  items={[<MenuItem onClick={() => console.log('Option1')}>Option1</MenuItem>]}
/>
```

## Accessibility

- The anchor element has `aria-expanded` and `aria-haspopup` set appropriately.
- The Menu and Menu Item components have the `role="menu"` and
  `role="menuitem"`.
- Pressing `Enter` on the focused anchor element expands the menu.
- Pressing `Escape` closes the expanded menu and returns focus to the anchor
  element.
- Pressing `up` or `down` arrow keys navigates between the Menu Items.
- Pressing `Enter` on a Menu Item "clicks" it.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Menu/Menu.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Menu/Menu.stories.tsx)
