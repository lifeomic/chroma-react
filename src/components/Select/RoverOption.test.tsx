import { within, fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SelectOption } from './index';
import { RoverOption } from './RoverOption';
import { act } from 'react-dom/test-utils';

const optionId = 'SelectOption';

const getBaseProps = () => ({
  option: (
    <SelectOption title="option2" value="option2" data-testid={optionId} />
  ),
  rover: jest.fn as any,
  handleOptionSelect: (() => {}) as any,
});

test('it sets the checked state on an option', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RoverOption
      {...props}
      value="option2"
      option={
        <SelectOption title="option2" value="option2" data-testid={optionId} />
      }
    />
  );

  const option = await findByTestId(optionId);
  const visuallyHiddenCheck = await within(option).findByText('✓');
  expect(visuallyHiddenCheck).toBeInTheDocument();
});

test('it *does not* set the checked state on an option if value is not option value', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RoverOption
      {...props}
      value="option1"
      option={
        <SelectOption title="option2" value="option2" data-testid={optionId} />
      }
    />
  );

  const option = await findByTestId(optionId);
  const visuallyHiddenCheck = await within(option).queryByText('✓');
  expect(visuallyHiddenCheck).not.toBeInTheDocument();
});

test('it calls the onChange upon selecting the option', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RoverOption
      {...props}
      handleOptionSelect={mockFn}
      value="option1"
      option={
        <SelectOption
          title="option2"
          value="option2"
          meta={{ foo: 'bar' }}
          data-testid={optionId}
        />
      }
    />
  );

  await act(async () => {
    const option = await findByTestId(optionId);
    fireEvent.click(option);
  });
  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toBeCalledWith('option2', { foo: 'bar' });
});
