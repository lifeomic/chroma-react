<!-- STORY -->

<br/>

# Header :point_up:

The main head-bar for the app. The component allows the following props: `logo`,
`left` content, `right` content, and `centerLogo` logo boolean.

## Import

```js
import { Header } from '@lifeomic/chroma-react/components/Header';
```

## Usage

```jsx
<Header
  logo={<Logo />}
  centerLogo={true}
  left={
    <Button variant="text" dimmed={true}>
      Account 1
    </Button>
  }
  right={
    <React.Fragment>
      <IconButton size="small" icon={Edit} />
      <IconButton size="small" icon={Trash2} />
      <Avatar size="small" button>
        T
      </Avatar>
    </React.Fragment>
  }
/>
```

### Class Name

A class name can be provided.

```jsx
<Header className="mr-4" />
```

## Accessibility

- The Header has `role="banner"`.
- The Header Logo, if provided, has `role="presentation"`.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Header/Header.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Header/Header.stories.tsx)
