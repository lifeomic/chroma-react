# Avatar Badges

Compose Avatar Badge with Avatar to render notifications over an Avatar
component.

## Import

```js
import { Avatar, AvatarBadge } from '@lifeomic/chroma-react/components/Avatar';
```

<!-- STORY -->

## Usage

### Count

The count to display in the badge.

```jsx
<Avatar name="Tony Ward">
  <AvatarBadge count={4} />
</Avatar>
```

### Is Visible

If a notification badge should appear without a count, leverage the visible
prop.

```jsx
<Avatar name="Tony Ward">
  <AvatarBadge isVisible />
</Avatar>
```

## Accessibility

- An `aria-label` is provided by default for the badge.
- The Avatar Badge has `role="status"`

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Avatar/Avatar.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Avatar/Avatar.stories.tsx)
