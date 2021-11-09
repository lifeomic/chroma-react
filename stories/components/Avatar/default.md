# Avatar

The Avatar component is used to represent a user. It displays a profile picture,
their name initials, or fallback icon.

## Import

```js
import { Avatar } from '@lifeomic/chroma-react/components/Avatar';
```

<!-- STORY -->

## Usage

### Name (_required_)

A name is required to render the Avatar component. It is also applied as an
`aria-label` for screen readers.

```jsx
<Avatar name="Tony" />
```

### Src

A profile picture can be displayed by providing a `src`.

```jsx
import tonypicture from './tonypic.jpg';

<Avatar src={tonypicture} name="Tony" />;
```

#### onError

An onError handler can be added to capture errors loading the `src` image. By
default, when a `src` fails to load, the avatar will fallback to initials.

```jsx
<Avatar
  src={someImageThatMightFail}
  name="Tony"
  onError={handleAvatarImageError}
/>
```

### Use Default Source (Masking Information)

This prop is leveraged when the information about the user needs to be "masked".
When this prop is provided, a default image will be used. Although their name is
required, it will not be used with this prop.

```jsx
import tonypicture from './tonypic.jpg';

// Note that even though `src` and `name` are provided, they will not be used
// and the default source will be used instead
<Avatar src={tonypicture} name="Tony" useDefaultSrc />;
```

### Size

There are size options exposed. Choose one that fits the best for your needs.

```jsx
<Avatar name="Tony" size={0} />
<Avatar name="Tony" size={1} />
<Avatar name="Tony" size={2} />
```

### Class Name

A class name can be provided.

```jsx
<Avatar name="Tony" className="mr-4" />
```

## Accessibility

- An `aria-label` is set with the `name`.
- When the Avatar is clickable, the Avatar has `role="button"`.
- When the Avatar is clickable, it has a `tabIndex={0}`.
- The Avatar source image, when provided, has an `alt` set to the `name`.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Avatar/Avatar.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Avatar/Avatar.stories.tsx)
