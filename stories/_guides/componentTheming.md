# Getting Started

## Component Theming

Each Chroma component allows one to override styles. This is accomplished via
the Chroma styles key that each component exports. The naming convention for the
keys are `Chroma<COMPONENT-NAME>`. If you're using TypeScript, you should get
the autocomplete for these items as well.

The objects inside of each Chroma styles key matches the class names defined in
the source of the component.

### Example

In this example, we will override the Primary Navigation header class to have a
background color of red.

```js
import { Overrides } from '@lifeomic/chroma-react-react/styles/overrides';
import { createTheme, Theme } from '@lifeomic/chroma-react-react/styles';

// Create overrides
const overrides = (theme: Theme): Overrides => ({
  ChromaPrimaryNavigation: {
    root: {},
    header: {
      backgroundColor: 'red',
    },
    headerContent: {},
    headerContentMin: {},
    headerContentHidden: {},
    toggleButton: {},
    navItems: {},
    footer: {},
    footToggle: {},
    footToggleContainer: {},
    toggleText: {},
  },
});

// Ensure you provide your overrides to Chroma's createTheme call
export const theme = createTheme({
  overrides,
});
```
