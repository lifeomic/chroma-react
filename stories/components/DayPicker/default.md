# Day Picker

An input component for selecting a day.

<!-- STORY -->

## Import

```js
import { DayPicker } from '@lifeomic/chroma-react/components/DayPicker';
```

## Usage

```jsx
const [date, setDate] = React.useState<Date | undefined>()

<DayPicker
  label="Date"
  placeholder="Pick a date..."
  value={date}
  onDayChange={setDate}
/>
```

### onDayChange and value

`DayPicker` is a controlled component, and uses the `value` and `onDayChange` props
to facilitate input.

```jsx
const [date, setDate] = React.useState<Date | undefined>()

<DayPicker
  label="Date"
  value={date}
  onDayChange={(date: Date) => setDate(date)}
/>
```

If `value` is set to `undefined`, the provided `placeholder` message will be shown.

`onDayChange` is called in two scenarios:

- a date was selected in the calendar UI
- if manual input is enabled (via `parseDate`), and the input is updated to a valid date string.

### Custom Formats

Custom text formats can be supported via the `formatDate` prop:

```jsx
<DayPicker
  label="Date"
  value={date}
  onDayChange={setDate}
  formatDate={(date: Date) => /* return the date string to render in the text field */}
/>
```

### Manual Input

By default, `DayPicker` does not allow for manual input into the text field.

Providing the `parseDate` prop will enable this behavior.

```jsx
<DayPicker
  label="Date"
  value={date}
  onDayChange={setDate}
  formatDate={(date: Date) => /* return the date string to render in the text field */}
  // The text field will become interactable when this prop is defined.
  parseDate={(text: string) => /* try to parse `text` into a Date */}
/>
```

You can use the `onTextChange` prop to visually handle malformed strings, e.g. via an error message.

```jsx
const [errorMessage, setErrorMessage] = React.useState(false);

<DayPicker
  label="Date"
  value={date}
  errorMessage={errorMessage}
  formatDate={(date: Date) => /* return the date string to render in the text field */}
  parseDate={(text: string) => /* try to parse `text` into a Date */}
  onDayChange={setDate}
  onTextChange={(text: string) => {
    const parsed: Date | undefined = parseSafely(text);
    if (!parsed) {
      setErrorMessage('The input does not match the format');
    } else {
      setErrorMessage('');
    }
  }}
/>
```

### Min/Max Dates and Disabling

Min/max dates can be set via `minDate` and `maxDate`.

More customized disabling can be done via `disableDay`.

```jsx
const [errorMessage, setErrorMessage] = React.useState(false);

<DayPicker
  label="Date"
  value={date}
  onDayChange={setDate}
  // Disables dates before today
  minDate={new Date()}
  // Disables dates after today
  maxDate={new Date()}
  // Disables every even-numbered day
  disableDay={(date) => date.getDate() % 2 === 0}
/>;
```

### Positioning

Custom anchor positioning can be done via `anchorPosition`.

```jsx
<DayPicker
  label="Date"
  value={date}
  onDayChange={setDate}
  anchorPosition="top-right"
/>
```

### Calendar UI Customization

The calendar UI can be customized via a number of props.

```jsx
const [errorMessage, setErrorMessage] = React.useState(false);

<DayPicker
  label="Date"
  value={date}
  setDate={setDate}
  // The secondary color can be used for the background
  // color of the "selected" day in the calendar.
  color="secondary"
  // A function for formatting the month + year title.
  // Useful to override for localization.
  formatMonthTitle={...}
  // A function for formatting the abbreviate weekday column headers.
  // Useful to override for localization.
  formatWeekdayShort={...}
  // A render prop for rendering the individual day cells.
  // Useful to override for custom UI.
  renderDay={...}
/>
```

### Other Props

`DayPicker` inherits (and forwards) most of its props on to the internal `TextField`. See
the documentation on `TextField` for more detailed descriptions of those props.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/DayPicker/DayPicker.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/DayPicker/DayPicker.stories.tsx)
