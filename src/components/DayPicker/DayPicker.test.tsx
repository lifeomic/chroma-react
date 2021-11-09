import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import dayjs from 'dayjs';

import { DayPicker, DayPickerProps, testIds } from '.';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { RenderResult } from '@testing-library/react';

dayjs.extend(require('dayjs/plugin/customParseFormat'));

const OUTSIDE_TEXT = 'Outside Element';

const render = (props?: DayPickerProps) =>
  renderWithTheme(
    <div>
      <DayPicker aria-label={'test-label'} {...props} />
      {/* We render this div outside the component for testing blur behavior. */}
      <div>{OUTSIDE_TEXT}</div>
    </div>
  );

it('renders a single input', () => {
  const view = render();

  const input = view.queryAllByRole('textbox');
  expect(input).toHaveLength(1);
});

for (const disabled of [true, false]) {
  it(`forwards ${disabled} disable prop to the input`, () => {
    const view = render({ disabled });

    const input = view.getByRole('textbox');

    expect(input).toMatchObject({ disabled });
  });
}

it('renders find-able properties', () => {
  const findableProps = {
    'data-testid': 'some-test-id',
    'aria-label': 'test-aria',
  };

  const view = render(findableProps);

  expect(view.queryByTestId('some-test-id')).not.toBeNull();
  expect(view.queryByLabelText('test-aria')).not.toBeNull();
});

it('supports custom formats via formatDate', () => {
  const view = render({
    value: new Date(),
    formatDate: jest.fn().mockReturnValue('some-random-string'),
  });

  const input = view.getByRole('textbox');

  expect(input).toMatchObject({
    value: 'some-random-string',
  });
});

it('supports custom formats via formatMonthTitle', () => {
  const view = render({
    value: new Date(),
    formatMonthTitle: () => 'some-random-month',
  });

  // Open the calendar by clicking the text field.
  const input = view.getByRole('textbox');
  fireEvent.mouseDown(input);

  const month = view.getByLabelText('Current month');

  expect(month.textContent).toStrictEqual('some-random-month');
});

it('supports custom formats via formatWeekdayShort', () => {
  const view = render({
    value: new Date(),
    formatWeekdayShort: (num) => `weekday-${num}`,
  });

  // Open the calendar by clicking the text field.
  const input = view.getByRole('textbox');
  fireEvent.mouseDown(input);

  for (const [num, weekday] of Object.entries([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ])) {
    const abbrev = view.getByTitle(weekday);
    expect(abbrev.textContent).toBe(`weekday-${num}`);
  }
});

it('calls onDayChange when clicking a day in the calendar', () => {
  const onDayChange = jest.fn();
  const view = render({
    // Nov 5, 2021
    value: new Date('2021-11-05T00:00:00.000Z'),
    onDayChange,
  });

  // Open the calendar by clicking the text field.
  const input = view.getByRole('textbox');
  fireEvent.mouseDown(input);

  // Expect the calendar to open.
  const calendar = view.queryByTestId(testIds.calendar);
  expect(calendar).not.toBeNull();

  expect(view.getByLabelText('Current month').textContent).toStrictEqual(
    'November 2021'
  );

  // Pick a date (Nov 12)
  // react-day-picker adds this nice aria-label
  const day = view.getByLabelText('Fri Nov 12 2021');
  fireEvent.click(day);

  expect(onDayChange).toHaveBeenCalledTimes(1);
  const date: Date = onDayChange.mock.calls[0][0];

  // Assert the date returned is Nov 12 👍
  expect(date.toISOString()).toBe('2021-11-12T00:00:00.000Z');
});

it('moves the calendar when the chevrons get clicked', () => {
  const view = render({
    // Nov 5, 2021
    value: new Date('2021-11-05T00:00:00.000Z'),
  });

  // Open the calendar by focusing the text field.
  const input = view.getByRole('textbox');
  fireEvent.focus(input);

  const month = view.getByLabelText('Current month');
  const leftChevron = view.getByLabelText('Previous month');
  const rightChevron = view.getByLabelText('Next month');

  fireEvent.click(leftChevron);

  expect(month.textContent).toStrictEqual('October 2021');

  fireEvent.click(rightChevron);
  fireEvent.click(rightChevron);

  expect(month.textContent).toStrictEqual('December 2021');
});

it('calls onTextChange and eventually onDayChange when manual input is used', () => {
  const onDayChange = jest.fn();
  const onTextChange = jest.fn();
  const view = render({
    value: undefined,
    onDayChange,
    onTextChange,
    parseDate: (text) => {
      const result = dayjs(text, 'MMMM D, YYYY', true);
      if (result.isValid()) {
        return result.toDate();
      }
      return undefined;
    },
    placeholder: 'test-placeholder',
  });

  // Open the calendar by clicking the text field. (implicit test
  // of placeholder pass-through)
  const input = view.getByPlaceholderText('test-placeholder');
  fireEvent.mouseDown(input);

  fireEvent.change(input, { target: { value: 'November' } });

  expect(onTextChange).toHaveBeenCalledTimes(1);
  expect(onTextChange).toHaveBeenNthCalledWith(1, 'November');
  expect(onDayChange).not.toHaveBeenCalled();

  fireEvent.change(input, { target: { value: 'November 10, 2022' } });

  expect(onTextChange).toHaveBeenCalledTimes(2);
  expect(onTextChange).toHaveBeenNthCalledWith(2, 'November 10, 2022');
  expect(onDayChange).toHaveBeenCalledTimes(1);
  expect(onDayChange.mock.calls[0][0].toISOString()).toStrictEqual(
    '2022-11-10T00:00:00.000Z'
  );
});

it('never calls onTextChange if parseDate is not provided', () => {
  const onTextChange = jest.fn();
  const view = render({
    value: undefined,
    onTextChange,
  });

  // Open the calendar by focusing the text field.
  const input = view.getByRole('textbox');
  fireEvent.focus(input);

  fireEvent.change(input, { target: { value: 'November' } });

  expect(onTextChange).not.toHaveBeenCalled();
});

const BLUR_SCENARIOS: {
  name: string;
  from: (view: RenderResult) => HTMLElement;
  to: (view: RenderResult) => HTMLElement;
  shouldClose: boolean;
}[] = [
  {
    name: 'input -> calendar',
    from: (view) => view.getByRole('textbox'),
    to: (view) => view.getByLabelText('Fri Nov 12 2021'),
    shouldClose: false,
  },
  {
    name: 'calendar -> input',
    from: (view) => view.getByLabelText('Fri Nov 12 2021'),
    to: (view) => view.getByRole('textbox'),
    shouldClose: false,
  },
  {
    name: 'calendar -> calendar',
    from: (view) => view.getByLabelText('Fri Nov 12 2021'),
    to: (view) => view.getByLabelText('Sat Nov 13 2021'),
    shouldClose: false,
  },
  {
    name: 'input -> outside',
    from: (view) => view.getByRole('textbox'),
    to: (view) => view.getByText(OUTSIDE_TEXT),
    shouldClose: true,
  },
  {
    name: 'calendar -> outside',
    from: (view) => view.getByLabelText('Fri Nov 12 2021'),
    to: (view) => view.getByText(OUTSIDE_TEXT),
    shouldClose: true,
  },
];

BLUR_SCENARIOS.forEach(({ name, from, to, shouldClose }) => {
  it(`${
    shouldClose ? 'does' : 'does not'
  } close the calendar when blurring from ${name}`, () => {
    const view = render({
      // Nov 5, 2021
      value: new Date('2021-11-05T00:00:00.000Z'),
    });

    // Open the calendar by focusing the text field.
    const input = view.getByRole('textbox');
    fireEvent.focus(input);

    // Expect the calendar to open.
    const calendar = view.queryByTestId(testIds.calendar);
    expect(calendar).not.toBeNull();

    const fromElement = from(view);
    const toElement = to(view);

    // Blur from the specified elements
    fireEvent.blur(fromElement, { relatedTarget: toElement });

    if (shouldClose) {
      expect(view.queryByTestId(testIds.calendar)).toBeNull();
    } else {
      expect(view.queryByTestId(testIds.calendar)).not.toBeNull();
    }
  });
});

it('closes the calendar on receiving ESC', () => {
  const view = render({
    value: new Date(),
  });

  // Open the calendar by focusing the text field.
  const input = view.getByRole('textbox');
  fireEvent.focus(input);

  fireEvent.keyDown(input, { key: 'Escape' });
});
