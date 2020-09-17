# Table Module

A table component with an opinionated API. It relies a `config` and `data` prop
for rendering. More on that below.

<!-- STORY -->

<sub>_Scroll to the bottom to see the full example of how this table was
created_</sub>

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

### isLoading

If `isLoading`, a loading indicator will be rendered as the last row in the
table.

### Data

The `data` prop to the table is typically the response from an API call or
whatever array of objects needed to render your table _rows_. It is not
opinionated at all and does not have any default typings.

### Config

`config` tells the table how to render header and row cells. It is an array of
objects. There is an exported interface, `TableConfiguration` that will provide
the proper typings for you.

`config` is an array of objects. Each object consists of a `header` and a `cell`
object. These two inner objects allow for further customization of the table.
Let's dig in to the `header` and `cell` props a bit more.

#### Header

This `header` prop is used to render the table header (or column). It exposes
two ways to render your table header.

##### Header Label

Can be any string, but preferably an i18n one for translations. This should be
the most common case, as most tables only require text as the headers.

```js
const config: Array<TableConfiguration> = [
  {
    header: {
      label: 'Header 1',
    },
  },
];
```

##### Header Content

A function that returns the header as an argument. This allows the consumer to
render whatever they want in that particular header cell. To dive a bit more
into the `content` function, here's an example:

```js
const config: Array<TableConfiguration> = [
  {
    header: {
      content: (header: TableHeader) => {
        console.log(header);
        return (
          <>
            <Info />
            This is a custom header cell!
          </>
        );
      },
    },
  },
];
```

#### Cell

Similar to the `header` mentioned above, `cell` also provides two props for
rendering content. The `cell` prop defines how the content inside of the cell
for the _row_ is rendered. Let's dig into the different options a bit more.

##### Cell ValuePath

The most direct way is to use `valuePath`. If you just want to render a property
directly off of your `data` object, leveraging `valuePath` will work great.

```js
const configWithCellValuePath: Array<TableConfiguration> = [
  {
    // header
    cell: {
      valuePath: 'description',
    },
  },
  {
    // header
    cell: {
      valuePath: 'calories',
    },
  },
];

const data = [
  {
    description: 'Frozen yoghurt',
    calories: '159',
  },
  {
    description: 'Ice cream sandwich',
    calories: '237',
  },
];
```

For the above example, we will have two columns. The first is "Description", the
second is "Calories". Our data model is also an array of objects with
"description" and "calories" props. Since we just want to render these raw, we
set `valuePath` to their respective props in each config object.

##### Cell Content

Similar to the header example, `cell` also exposes a `content`. It provides the
`cell` as an argument.

```js
const config: Array<TableConfiguration> = [
  {
    // ... header
    cell: {
      content: (cell: any) => {
        if (cell.description.includes('frozen')) {
          return (
            <span>
              <FrozenIcon />
              {cell.description}
            </span>
          );
        }

        return cell.description;
      },
    },
  },
];
```

### Putting It All Together

Below is an example putting all of that together!

```js
const config: Array<TableConfiguration> = [
  {
    header: {
      label: 'Description',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.description;
      },
    },
  },
  {
    header: {
      label: 'Calories',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.calories;
      },
    },
  },
  {
    header: {
      label: 'Fat',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.fat;
      },
    },
  },
  {
    header: {
      label: 'Carbs',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.carbs;
      },
    },
  },
];

const data = [
  {
    description: 'Frozen yoghurt',
    calories: '159',
    fat: '6.0',
    carbs: '24',
  },
  {
    description: 'Ice cream sandwich',
    calories: '237',
    fat: '9.0',
    carbs: '37',
  },
  {
    description: 'Eclair',
    calories: '262',
    fat: '16.0',
    carbs: '24',
  },
  {
    description: 'Cupcake',
    calories: '305',
    fat: '3.7',
    carbs: '67',
  },
];
```

```jsx
<TableModule config={config} data={data} isLoading={false} />
```

## Accessibility

- The table leverages the proper `role` attributes.
- The `aria-sort` attribute is used when sorting occurs (ascending, descending,
  none).
- NOTE: To test with a screenreader with VoiceOver, use
  `control+option+command+t`.
- Resource:
  [https://inclusive-components.design/data-tables/](https://inclusive-components.design/data-tables/)

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
