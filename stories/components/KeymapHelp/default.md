# KeymapHelp

The KeymapHelp component provides a modal UI for detailing a set of keyboard shortcuts.

The modal is "invisible" unless raised using `Shift + ?`. To show the default experience now, press `Shift + ?`.

<!-- STORY -->

## Import

```js
import { KeymapHelp } from '@lifeomic/chroma-react/components/KeymapHelp';
```

## Usage

```jsx
<KeymapHelp />
```

## Customization

You can specify additional keymap entries using the `keyMapDocs` prop.

```jsx
<KeymapHelp
  keyMapDocs={[
    {
      sequence: 'ctrl+alt+delete',
      description: 'Bring up the help menu',
    },
  ]}
/>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/KeymapHelp/KeymapHelp.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/KeymapHelp/KeymapHelp.stories.tsx)
