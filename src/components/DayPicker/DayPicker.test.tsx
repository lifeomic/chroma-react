import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import dayjs from 'dayjs';

import { DayPicker, DayPickerProps, testIds } from '.';
import { renderWithTheme } from '../../testUtils/renderWithTheme';

dayjs.extend(require('dayjs/plugin/customParseFormat'));

const render = (props?: DayPickerProps) =>
  renderWithTheme(<DayPicker aria-label={'test-label'} {...props} />);

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

it('calls onDayChange when clicking a day in the calendar', () => {
  const onDayChange = jest.fn();
  const view = render({
    // Nov 5, 2021
    value: new Date('2021-11-05T00:00:00.000Z'),
    onDayChange,
  });

  // Open the calendar by clicking the text field.
  const input = view.getByRole('textbox');
  fireEvent.click(input);

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
  expect(date.toISOString()).toBe('2021-11-12T17:00:00.000Z');
});

it('moves the calendar when the chevrons get clicked', () => {
  const view = render({
    // Nov 5, 2021
    value: new Date('2021-11-05T00:00:00.000Z'),
  });

  // Open the calendar by clicking the text field.
  const input = view.getByRole('textbox');
  fireEvent.click(input);

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
  fireEvent.click(input);

  fireEvent.change(input, { target: { value: 'November' } });

  expect(onTextChange).toHaveBeenCalledTimes(1);
  expect(onTextChange).toHaveBeenNthCalledWith(1, 'November');
  expect(onDayChange).not.toHaveBeenCalled();

  fireEvent.change(input, { target: { value: 'November 10, 2022' } });

  expect(onTextChange).toHaveBeenCalledTimes(2);
  expect(onTextChange).toHaveBeenNthCalledWith(2, 'November 10, 2022');
  expect(onDayChange).toHaveBeenCalledTimes(1);
  expect(onDayChange.mock.calls[0][0].toISOString()).toStrictEqual(
    '2022-11-10T05:00:00.000Z'
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
