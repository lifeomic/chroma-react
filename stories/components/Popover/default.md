# Popover

A popover element, anchored to another element. Typically provides additional or
actionable information to the anchor element. Popovers with specific selection
items should use `Menu` instead.

## Import

```js
import {
  Popover,
  PopoverActions,
} from '@lifeomic/chroma-react/components/Popover';
```

<!-- STORY -->

## Usage

### aria-label (required)

A descriptive label for for the popover.

```jsx
<Popover aria-label="More Info" />
```

### Class Name

A class name can be provided.

```jsx
<Popover className="mr-4" />
```

### Anchor Element

The React component the popover should anchor to.

```jsx
<Popover aria-label="More Info" anchorElement={<Avatar name="Tony Ward" />} />
```

### Rendering Popover Content

The content inside of the Popover can be any content.

```jsx
<Popover aria-label="More Info" anchorElement={<Avatar name="Tony Ward" />}>
  <p>Content</p>
</Popover>
```

### Rendering a Title

A title can be provided to render a title at the top of the Popover.

```jsx
<Popover aria-label="More Info" title="My Popover">
  <p>Content</p>
</Popover>
```

### Use Portal

If your Popover needs to be rendered as a Portal, it's possible with a prop.
This is helpful when the content needs to go outside of its container.

```jsx
<Popover aria-label="More Info" usePortal>
  <p>Content</p>
</Popover>
```

### Rendering Actionable Content

You can leverage the Popover Actions when there needs to be content as well as
actions listed at the bottom of the popover.

The content takes a `justify` prop for the actions.

```jsx
<Popover aria-label="More Info" anchorElement={<Avatar name="Tony Ward" />}>
  <>
    <p>Content</p>
    <PopoverActions justify="center">
      <Button>Sign Out</Button>
    </PopoverActions>
  </>
</Popover>
```

**Note:** If there are distinct selection item options, please use `<Menu>`
instead.

### Rendering Items

It is **highly** recommended that the `<Menu>` component be used instead;
however, there may be existing use cases where a popover needs a list of items.
This path is not 100% out-of-the-box accessible -- it works with a screen
reader;however, keyboard support is not available with this just yet.

```jsx
<Popover aria-label="More Info" anchorElement={<Button>Open Popover</Button>}>
  <>
    <PopoverList>
      <PopoverItem icon={Edit} text="Edit" />
      <PopoverItem icon={Trash} text="Delete" />
      <PopoverItem>Your custom content here!</PopoverItem>
    </PopoverList>
    <PopoverActions justify="center">
      <Button>Sign Out</Button>
    </PopoverActions>
  </>
</Popover>
```

#### Popover Item props

The following props are available on the Popover Item component:

- className: Will apply the provided class name to the component.
- children: The Popover Item component can render user-defined content
  leveraging children.
- icon: A React SVG component to render.
- text: The text to display.
- justify: The flex 'justify-content' property. Helpful when laying content out
  a particular way.
- direction: The flex 'direction' property. Helpful when laying content out a
  particular way.
- noTextWrap: Will add "white-space: 'nowrap'" to the element
- clipText: Will auto overflow hide and text overflow ellipsis the content

## Accessibility

- The anchor element has `aria-controls` and `aria-haspopup="dialog"`.
- The content contains `role="dialog"` and `data-dialog="true"`.
- Pressing `Enter` on the focused anchor element expands the menu.
- Pressing `Escape` closes the expanded menu and returns focus to the anchor
  element.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Popover/Popover.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Popover/Popover.stories.tsx)
