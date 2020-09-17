import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Chip } from './';

const testId = 'chip';

test('it renders a Chip', async () => {
  const { findByTestId } = renderWithTheme(<Chip data-testid={testId} />);

  const chip = await findByTestId(testId);
  expect(chip).toBeInTheDocument();
});

test('it renders a Chip with a label', async () => {
  const { findByLabelText } = renderWithTheme(
    <Chip data-testid={testId} label="chip" />
  );

  const chip = await findByLabelText(testId);
  expect(chip).toBeInTheDocument();
});

test('it hides the delete button when onDelete is not present', () => {
  const { queryByLabelText } = renderWithTheme(<Chip data-testid={testId} />);

  const button = queryByLabelText('Remove');
  expect(button).toBeFalsy();
});

test('it disables the delete button when provided onDelete and disableDelete', async () => {
  const { findByLabelText } = renderWithTheme(
    <Chip data-testid={testId} disableDelete={true} onDelete={jest.fn()} />
  );

  const button = await findByLabelText('Remove');
  expect(button).toBeDisabled();
});

test('it displays the delete button when onDelete is present', async () => {
  const { findByLabelText } = renderWithTheme(
    <Chip data-testid={testId} onDelete={jest.fn()} />
  );
  const button = await findByLabelText('Remove');
  expect(button).toBeTruthy();
});

test('it calls the provided onDelete function', async () => {
  const fn = jest.fn();

  const { findByLabelText } = renderWithTheme(
    <Chip data-testid={testId} onDelete={fn} />
  );

  const removeButton = await findByLabelText('Remove');
  fireEvent.click(removeButton);
  expect(fn).toBeCalled();
});

test('it renders a Chip with the provided children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <Chip>
      <div data-testid={testId} />
    </Chip>
  );
  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});
