# Modals

Tab components for conditionally rendering content.

## Import

```js
import { Modal } from '@lifeomic/chroma-react/components/Modal';
```

<!-- STORY -->

## Usage

### Click Target

Although not required, it's important that if a Modal is controlled via button
or another click target, that it has the following attributes:

```jsx
<Button
  aria-haspopup="dialog"
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  Open Modal
</Button>
```

### Modal

#### isOpen

The Modal opens/closes based on this single prop.

```jsx
<Modal isOpen={isOpen}>
  <p>Modal Content</p>
</Modal>
```

#### Fullscreen

To render a fullscreen Modal, use the fullscreen prop.

```jsx
<Modal isOpen={isOpen} isFullScreen={true}>
  <p>Modal Content</p>
</Modal>
```

#### Title

An optional title to render.

```jsx
<Modal isOpen={isOpen} title="Title Text">
  <p>Modal Content</p>
</Modal>
```

#### Full Width

The Modal can take the full-width allowed of the screen.

```jsx
<Modal isOpen={isOpen} fullWidth>
  <p>Modal Content</p>
</Modal>
```

#### Size

The Modal can take different sizing options. These currently only adjust the
vertical sizing.

```jsx
<Modal isOpen={isOpen} size={1}>
  <p>Modal Content</p>
</Modal>
```

#### On Dismiss

To wire a callback in when the `Modal` is closed, use `onDismiss`.

```jsx
<Modal
  isOpen={isOpen}
  onDismiss={() => {
    console.log('closing...');
    setIsOpen(false);
  }}
>
  <p>Modal Content</p>
</Modal>
```

By default, the `Modal` will call `onDismiss` when any of the following occurs:

1. The user clicks the close button.
2. The user presses the `ESC` key.
3. The user clicks outside the modal content (anywhere on the overlay).

To disable the behavior of #3, use `disableDismissOnClickOutside`.

```jsx
<Modal
  isOpen={isOpen}
  disableDismissOnClickOutside
  onDismiss={() => {
    console.log('user clicked close button or pressed ESC');
    setIsOpen(false);
  }}
>
  <p>Modal Content</p>
</Modal>
```

### Modal Actions

Actions can be provided to the Modal, with a justify prop as well for content
flow.

```jsx
<Modal
  isOpen={isOpen}
  onDismiss={() => setIsOpen(false)}
  justifyActions="space-between"
  actions={
    <>
      <Button variant="text" onClick={() => setIsOpen(false)}>
        Close
      </Button>
      <Button variant="contained" onClick={() => setIsOpen(false)}>
        Save
      </Button>
    </>
  }
>
  <p>Modal Content</p>
</Modal>
```

### Modal Form Data

The Modal container can be wrapped inside of a `<form>` element.

For all of this to work as expected, the following props need to be supplied:

- Modal `isFormContent`.
- Modal `onFormSubmit`.
- Button inside of `actions` needs `type="submit"`.

```jsx
<Modal
  isOpen={isOpen}
  onDismiss={() => setIsOpen(false)}
  isFormContent={true}
  onFormSubmit={() => console.log('form submitted')}
  actions={
    <>
      <Button
        type="submit"
        variant="contained"
        onClick={() => setIsOpen(false)}
      >
        Save
      </Button>
    </>
  }
>
  <p>Modal Content</p>
</Modal>
```

### Custom Headers

The Modal can use a custom defined header. If the `customHeader` prop is
provided, it will be rendered instead of `title` and the 'x' in the standard
header.

If `customheader` is provided, `title` will be ignored. You will also be
responsible for providing a way to close the modal, because the standard 'x' is
not rendered.

```jsx
<Modal
  isOpen={isOpen}
  onDismiss={() => setIsOpen(false)}
  customHeader={<div>Hello, World!</div>}
>
  <p>Modal Content</p>
</Modal>
```

## Custom Animations

You can conditionally overwrite the default framer-motion
[Transition](https://www.framer.com/api/motion/types/#transition) objects that
control the enter and exit animations.

The default values of these properties are:

```jsx
<Modal
  poses={{
    init: { y: 50, scale: 0.3 },
    open: { y: 0, scale: 1 },
    exit: { scale: 0.5, transition: { duration:  0.15 } }
  }}
  ...
>
```

## Accessibility

- The Modal has `role="dialog"`.
- The Modal has `aria-modal="true"`.
- The Modal has the content `aria-describedby` and title `aria-labelledby`
  attributes.
- The scroll body is locked, to prevent the content behind the Modal from
  scrolling.
- The focus is locked inside of the modal.
- The focus is set to the first tabbable element when open.
- Pressing `Escape` closes the modal and returns focus to the anchor element.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Modal/Modal.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Modal/Modal.stories.tsx)
