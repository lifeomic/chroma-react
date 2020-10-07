# Breadcrumbs

Breadcrumbs, or a breadcrumb navigation, can help to enhance how users navigate
to previous page levels of a website, especially if that website has many pages
or products.

## Import

```jsx
import { Breadcrumbs } from '@lifeomic/chroma-react/Breadcrumbs';
```

<!-- STORY -->

## Usage

**:exclamation:Requirement:exclamation::** This component has a dependency on
react-router-dom. It must be wrapped by a `Router` of some sort.

### Crumbs

Provide crumbs to the component to render out links.

```jsx
<BrowserRouter>
  <Breadcrumbs
    crumbs={[
      {
        text: 'Root',
        url: 'root',
      },
      {
        text: 'Child',
        url: 'root/child',
      },
      {
        text: 'GrandChild',
        url: 'root/child/grand',
      },
    ]}
  />
</BrowserRouter>
```

### Color

When the Breadcrumbs need to be rendered, but on a dark-colored background, the
`color` prop can be utilized.

```jsx
<Breadcrumbs color="inverse" />
```

### Class Name

A class name can be provided.

```jsx
<Breadcrumbs className="mr-4" />
```

## Accessibility

- The Breadcrumbs are rendered in a nav to denote that it's a navigation
  landmark.
- The Breadcrumb nav has aria-label set to breadcrumb.
- The links can be focused via the `Tab` key

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Breadcrumbs/Breadcrumbs.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Breadcrumbs/Breadcrumbs.stories.tsx)
