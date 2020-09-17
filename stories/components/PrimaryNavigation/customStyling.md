# Custom Styling

## Custom Properties

Providing custom styling for the Primary Navigation can be a bit tricky, as you
have to really know the structure of the CSS and how it relates to the DOM
elements. To try and ease this pain, some CSS Custom Properties are exposed to
help you hook into the areas of the components you may want to customize. These
Custom Properties are defined at the root class. There is more information about
this below in an example. Here are the available Custom Properties:

- `--link-color`
- `--link-hover`
- `--link-active`
- `--link-active-bg`
- `--link-size`

To adjust the colors of the links, `link-color` and `link-hover` are provided.
These are mapped to the CSS color property for navigation items and will change
their default and hover-state colors.

`link-active` is the color the link should be when the link is active. The color
provided will be the color of the text.

`link-active-bg` is the background color of the navigation element when the link
is active.

`link-size` is the font size for navigation items.

## Usage with Theme

To provide your own values for these, you must provide an override to the theme.
Below is an example.

```jsx
import { Overrides } from '@lifeomic/chroma-react/styles/overrides';
import { createTheme, Theme } from '@lifeomic/chroma-react/styles';

export const overrides = (theme: Theme): Overrides => ({
  ChromaPrimaryNavigation: {
    root: {
      // Provide your own colors from your theme
      '--link-color': theme.palette.black[600],
      '--link-hover': theme.palette.primary.main,
      '--link-active': theme.palette.blue.light,
      '--link-active-bg': theme.palette.primary[50],
    },
  },
});

// Create the theme and provide your overrides
export const theme = createTheme({
  overrides,
});
```
