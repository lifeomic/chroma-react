# Slide Over

Slide Overs are used to display content that is hidden until toggled open.

**NOTE:** The parent must have `position: relative` for this to work properly.

**NOTE:** This component locks the body from scrolling by design, so that users
can scroll the Slide Over panel.

<!-- STORY -->

## Import

```js
import {
  SlideOver,
  Actions,
  Body,
  Header,
} from '@lifeomic/chroma-react/components/SlideOver';
```

## SlideOver Usage

Compose the SlideOver components together to build your sliding panel. All of
the children of SlideOver are optional; however, they help ensure the correct
padding among other styles and are recommended.

```jsx
<SlideOver isOpen={isSlideOverOpen}>
  <Header
    title="Panel Title"
    onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}
  />
  <Body>
    <Text>your content</Text>
  </Body>
  <Actions justify="flex-end">
    <Button variant="text">Cancel</Button>
    <Button>Save</Button>
  </Actions>
</SlideOver>
```

### isOpen

When `isOpen` is set to true, the panel will be open. When toggled to false, the
panel will animate closed.

```jsx
<SlideOver isOpen />
```

## Header

### Title

The title for the Panel.

```jsx
<SlideOver>
  <Header title="Panel Title" />
</SlideOver>
```

### Children

If you'd like to render custom content in the Header instead of a title-only header, provide children:

```jsx
<SlideOver>
  <Header>
    <Avatar name="User" />
    <Text>User</Text>
  </Header>
</SlideOver>
```

### onClose

A callback for when the Close icon button is clicked. This will commonly close
the panel.

## Body

The main content inside of the panel.

### as

To adjust the rendered element, leverage the as prop:

```jsx
<Body as="section" />
```

In the above example, the body component will now be rendered as a section
element.

## Actions

When needing to render action buttons, leverage the actions component. It
extends the `<Box />` component, so all props available to Box are available to
`Actions`.

```jsx
<SlideOver isOpen={isSlideOverOpen}>
  <Header
    title="Panel Title"
    onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}
  />
  <Body>
    <Text>your content</Text>
  </Body>
  <Actions justify="flex-end">
    <Button variant="text">Cancel</Button>
    <Button>Save</Button>
  </Actions>
</SlideOver>
```

### Accessibility

- The SlideOver locks scroll when open.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SlideOver/SlideOver.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SlideOver/SlideOver.stories.tsx)
