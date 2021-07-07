# Page Layout with Background

A default background image can be applied to the header with the
`applyBackgroundCover` prop.

<!-- STORY -->

## Import

```js
import { PageLayout } from '@lifeomic/chroma-react/components/PageLayout';
```

## Usage

```jsx
<PageLayout title="Account 1" applyBackgroundCover>
  {/* Your content */}
</PageLayout>
```

### Overriding The Image

To override the image at the theme level, leverage the styles key:

```js
ChromaPageLayout: {
  backgroundCover: {
    background: `url(${your - image})`;
    // any additional props to apply
  }
}
```

To override the image for a single use, pass in backgroundImage:

```jsx
<PageLayout
  title="Account 1"
  applyBackgroundCover
  backgroundImage={overrideImage}
>
  {/* Your content */}
</PageLayout>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PageLayout/PageLayout.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PageLayout/PageLayout.stories.tsx)
