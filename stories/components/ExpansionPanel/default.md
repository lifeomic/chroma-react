# Expansion Panel

Panel component for expanding/collapsing content.

## Import

```js
import { ExpansionPanel } from '@lifeomic/chroma-react/components/ExpansionPanel';
```

<!-- STORY -->

## Usage

### Title (_required_)

The title of the panel.

```jsx
<ExpansionPanel title="Expansion Panel">
  <p>Content inside of panel</p>
</ExpansionPanel>
```

### isOpen

There may be cases where the Expansion Panel should be open by default. For this
case, provide `isOpen`:

```jsx
<ExpansionPanel title="Expansion Panel" isOpen>
  <p>Content inside of panel</p>
</ExpansionPanel>
```

### Content Direction

A `contentDirection` prop is provided to set the inner content container's flex
direction. By default, this is set to "column".

```jsx
<ExpansionPanel title="Expansion Panel" contentDirection="row">
  <>
    <div>c1</div>
    <div>c2</div>
  </>
</ExpansionPanel>
```

### Content Class Name

A `contentClassName` prop is provided to add a `className` to the expanded
content. This is helpful in situations where you need to style the inner
content.

```jsx
<ExpansionPanel title="Expansion Panel" contentClassName="m4">
  <p>Content inside of panel</p>
</ExpansionPanel>
```

### Inner Content Class Name

A `innerContentClassName` prop is provided to add a `className` to the expanded
content. This is helpful in situations where you need to style the inner
container when it is expanded.

```jsx
<ExpansionPanel title="Expansion Panel" innerContentClassName="m4">
  <p>Content inside of panel</p>
</ExpansionPanel>
```

### onToggle

To be trigger an event when the Expansion Panel is clicked, leverage the
`onToggle` prop. It will return the state of the panel as an argument.

```jsx
<ExpansionPanel
  title="Expansion Panel"
  onToggle={(state) => console.log(state)}
>
  <p>Content inside of panel</p>
</ExpansionPanel>
```

### Class Name

A class name can be provided.

```jsx
<ExpansionPanel title="Expansion Panel" className="bg-white">
  <p>Content inside of panel</p>
</ExpansionPanel>
```

### Accessibility

- The click target is a `button` element.
  - Pressing `Tab` will set focus to the element
  - Pressing `Space` or `Enter` triggers the click action.
- It leverages `aria-expanded` on the root button element.
- It leverages `aria-owns` to define the expanded content.
- It leverages `aria-hidden` on the content that expands/collapses.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ExpansionPanel/ExpansionPanel.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ExpansionPanel/ExpansionPanel.stories.tsx)
