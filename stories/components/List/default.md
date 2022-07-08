# List

A component for rendering actionable options.

## Import

```js
import { List, ListItem } from '@lifeomic/chroma-react/components/List';
```

<!-- STORY -->

## Usage

### aria-label (required)

A descriptive label for the list.

```jsx
<List aria-label="Chroma List" />
```

### Group Headings

Use the `ListGroupHeading` component to render "section" headers for grouped List items.

```jsx
<List
  aria-label="Chroma List"
  items={[
    <ListGroupHeading>First Section</ListGroupHeading>,
    <ListItem>Option 1</ListItem>,
    <ListItem>Option 2</ListItem>,
    // Can pass any React child as a group heading.
    <ListGroupHeading>
      <p>Second Section</p>
    </ListGroupHeading>,
    <ListItem>Option 3</ListItem>,
    <ListItem>Option 4</ListItem>,
  ]}
/>
```

### Class Name

A class name can be provided.

```jsx
<List className="mr-4" />
```

### List Items

Lists render items and are keyboard navigable.

### On Click

List items can specify an `onClick` prop, which will be called when the List
item is clicked (or pressed via keyboard). If no `onClick` is provided, the list
item will be readonly and styled as such (no hover/focus).

#### Text

A List Item can contain just text.

```jsx
<List
  aria-label="Chroma List"
  items={[
    <ListItem
      text="Request Download Link"
      onClick={() => console.log('Request Download Link')}
    />,
  ]}
/>
```

#### Secondary Text

A List Item can contain secondary text.

```jsx
<List
  aria-label="Chroma List"
  items={[
    <ListItem
      text="Request Download Link"
      secondaryText="This is secondary text"
      onClick={() => console.log('Request Download Link')}
    />,
  ]}
/>
```

#### Icon

An Icon can be rendered for the List Item. It's recommended to use the
[Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.

```jsx
<List
  aria-label="Chroma List"
  items={[
    <ListItem
      text="Request Download Link"
      icon={HelpCircle}
      onClick={() => console.log('Request Download Link')}
    />,
  ]}
/>
```

#### Avatar

An Avatar can be rendered for the List Item. You must use Chroma's
[Avatar](https://github.com/lifeomic/chroma-react/blob/master/src/components/Avatar/Avatar.tsx) component.

```jsx
<List
  aria-label="Chroma List"
  items={[
    <ListItem
      avatar={<Avatar name="Haley" useDefaultSrc>}
      text="Request Download Link"
      onClick={() => console.log('Request Download Link')}
    />,
  ]}
/>
```

#### Children Content

Your own content can be rendered inside of a List Item as well.

```jsx
<List
  aria-label="Chroma List options"
  items={[<ListItem onClick={() => console.log('Option1')}>Option1</ListItem>]}
/>
```

## Accessibility

- Pressing `Enter` on a List Item "clicks" it.
- Readonly List Items have focus-visible styles to indicate which item is focused on when
  tabbing

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/List/List.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/List/List.stories.tsx)
