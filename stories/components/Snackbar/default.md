# Snackbar

The Snackbar is used to show alerts and give feedback to users after an action
has happened. Currently, it only supports one Snackbar displayed at a time. For
mobile users, the Snackbar will be anchored to the bottom.

## Import

```js
import { Snackbar } from '@lifeomic/chroma-react/components/Snackbar';
```

<!-- STORY -->

## Usage

### Is Open

The Snackbar is only displayed and open when this prop is set to true. It is up
to the consumer to close the Snackbar. Use the `onClose` prop below to
accomplish this.

```jsx
<Snackbar isOpen={true} />
```

### Duration

To tweak how long the Snackbar will stay open, provide the duration prop. By
default, it is set to 6 seconds.

```jsx
<Snackbar duration={1000} />
```

### Status Type

The following status types are provided:

```jsx
<Snackbar statusType="info" />
<Snackbar statusType="warning" />
<Snackbar statusType="error" />
<Snackbar statusType="success" />
```

### Title

The text to display inside of the Snackbar.

```jsx
<Snackbar title="This is a Snackbar!" />
```

### Children

If the Snackbar is provided with children, it will render those in place of the
`title` prop.

```jsx
<Snackbar>
  <p>Some Text</p>
</Snackbar>
```

### On Close

The `onClose` attribute will be called after `duration` has elapsed.

⚠️ The Snackbar will not automatically close itself. It is your responsibility
to use the `onClose` prop to toggle the `isOpen` prop.

```jsx
const [isOpen, setIsOpen] = React.useState(true);

<Snackbar
  isOpen={isOpen}
  onClose={() => {
    console.log('closing now!');
    setIsOpen(false);
  }
/>
```

### Icon

An Icon can be provided to the Snackbar.

```jsx
<Snackbar icon={Zap} />
```

### Role

Two roles can be provided to the Snackbar.

- `alert`. This should only be provided when it is a true alert. It sets the
  `aria-live` attribute to `assertive`. This tells screen readers to read the
  Snackbar notification immediately.
- `status`. This is a more polite Snackbar message, and allows the screen reader
  to read the alert when it is idle. This is still normally very quickly.

```jsx
<Snackbar role="alert" />
<Snackbar role="status" />
```

### Class Name

A class name can be provided. This is extremely helpful when you want to
override the top, right, left, or bottom styles directly via a class to position
the Snackbar.

```jsx
<Snackbar className="mr-4" />
```

## Accessibility

- The Snackbar has `role` set to either `alert` or `status`.
- The Snackbar has `aria-live` set to either `assertive` or `polite`.
- The Snackbar icon has `role="img"` and `aria-hidden`.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Snackbar/Snackbar.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Snackbar/Snackbar.stories.tsx)
