# Alert

Alerts are used to communicate a state that affects a system, feature or page.

<!-- STORY -->

## Import

```js
import {
  Alert,
  AlertBody,
  AlertIcon,
  AlertActionsRow,
} from '@lifeomic/chroma-react/components/Alert';
```

## Alert Usage

```jsx
<Alert>
  <AlertIcon icon={Info} />
  <AlertBody>
    <Text size="subbody">This is the latest version of Chroma.</Text>
  </AlertBody>
</Alert>
```

### statusType

The statusType prop represents a state of either, `info`, `error`, `warning`, or
`success`.

```jsx
<Alert statusType="error" />
```

The status types line up with the Snackbar component.

### fullWidth

Sets the width to 100%.

```jsx
<Alert fullWidth />
```

## Alert Body

### spaceBetween

The `spaceBetween` prop applies the `justifyContent: space-between` to the
container

## Composition

#### Alerts with Lists

For Alerts with lists, you can leverage `ul` and `li` elements.

```jsx
<Alert statusType="error">
  <AlertIcon icon={XCircle} />
  <AlertBody>
    <Text size="subbody" weight="bold">
      There were a few errors with submitting your order
    </Text>
    <ul>
      <li>You did not provide your address</li>
      <li>You did not provide your email</li>
      <li>You did not provide a backup email</li>
    </ul>
  </AlertBody>
</Alert>
```

#### Alerts with a Single Action

Alerts with a single action button _do not_ need to leverage the
`AlertActionsRow`. Instead, they can inline the button in the `AlertBody`.

```jsx
<Alert fullWidth>
  <AlertIcon icon={Info} />
  <AlertBody spaceBetween>
    <Text size="subbody">The latest version of Chroma is 9999.9.9.9</Text>
    <Button variant="text">Details</Button>
  </AlertBody>
</Alert>
```

```jsx
<Alert fullWidth>
  <AlertIcon icon={Info} />
  <AlertBody spaceBetween>
    <Text size="subbody">The latest version of Chroma is 9999.9.9.9</Text>
    <IconButton aria-label="Dismiss" icon={X} size={0} />
  </AlertBody>
</Alert>
```

#### Alerts with Multiple Actions

For Alerts with multiple action buttons, leverage the `AlertActionsRow`
component.

```jsx
<Alert statusType="success">
  <AlertIcon icon={CheckCircle} />
  <AlertBody>
    <Text size="subbody" weight="bold">
      Order complete!
    </Text>
    <Text size="caption">
      We will send you your tracking information via email.
    </Text>
    <AlertActionsRow>
      <Button variant="text">View Status</Button>
      <Button variant="text">Dismiss</Button>
    </AlertActionsRow>
  </AlertBody>
</Alert>
```

### Accessibility

- The Alert component has the `alert` role.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Alert/Alert.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Alert/Alert.stories.tsx)
