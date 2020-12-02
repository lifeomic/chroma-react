# Stepper

A Stepper component to display progress.

## Import

```js
import { Stepper, Step } from '@lifeomic/chroma-react/components/Stepper';
```

<!-- STORY -->

## Usage

### Setting Initial Active Step

Pass in a number to specify which step should be selected as the initial active
step. For steps with `as="button"` the onClick should handle updating the
activeStep.

```jsx
<Stepper
  activeStep={activeStep}
  as="button"
  onClick={(index) => setActiveStep(index)}
>
  {children}
</Stepper>
```

### Rendering Children

It is **highly** recommended that the `<Step>` component be used.

```jsx
<Stepper activeStep={0} as="button" onClick={handleStepClick}>
  <Step icon={Zap} subTitlePillLabel="950" title="Registered" />
  <Step icon={Activity} subTitlePillLabel="900" title="Consented" />
  <Step icon={User} subTitlePillLabel="750" title="Demographics" />
  <Step icon={Flag} subTitlePillLabel="550" title="Completed" />
</Stepper>
```

### Rendering Children as Buttons or Divs

An "as" prop can be passed in to specify whether you'd like the children to be
button components (clickable) or div components.

```jsx
<Stepper activeStep={1} as="div">
  <Step icon={Zap} subTitle="Subjects" title="Registered" />
  <Step icon={Activity} subTitle="Subjects" title="Consented" />
</Stepper>
```

#### Step props

The following props are available on the component:

- icon: A React SVG component to render. Leaving out icon will render its ordered number.
- title: The primary text to display directly underneath the Stepper icon.
- subTitle: The text to display directly underneath the title.
- subTitlePillLabel: A Pill to display directly underneath the title (usually to
  display counts).

### Rendering a Step Title

A title can be provided to render a title underneath the Stepper icon.

```jsx
<Step title="My 1st Step" />
```

### Rendering a Step Subtitle

There are two different subtitles that can be provided, subTitle or
subTitlePillLabel. subTitlePillLabel will render a Pill instead of a Text
component.

```jsx
<Step subTitle="My 1st Step" />
```

```jsx
<Step subTitlePillLabel={320} />
```

### Rendering Steps Ordered as 1, 2, 3, etc

By not providing the Icon, `Step` will display the `index + 1` in the icons place.

```jsx
<Step title="First" />
<Step title="Second" />
<Step title="Last" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Stepper/Stepper.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Stepper/Stepper.stories.tsx)
