import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Snackbar, SnackbarProps } from './index';
import { waitFor } from '@testing-library/dom';
import { hasClass } from '../../testUtils/hasClass';

const testId = 'Snackbar';

const getBaseProps = (): SnackbarProps => ({
  // Make duration ridiculous so it doesn't close on us during tests
  duration: 60000,
  title: 'title',
  isOpen: true,
});

test('it renders a Snackbar', async () => {
  const { findByTestId, findByText } = renderWithTheme(
    <Snackbar {...getBaseProps()} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(hasClass(root, 'ChromaSnackbar-infoModifier')).toBe(true);
  expect(root.getAttribute('aria-live')).toEqual('polite');
  expect(root.getAttribute('role')).toEqual('status');

  const title = await findByText(getBaseProps().title!);
  expect(title).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Snackbar
      {...getBaseProps()}
      data-testid={testId}
      className="custom-class-name"
    />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it renders a "warning" Snackbar', async () => {
  const { findByTestId } = renderWithTheme(
    <Snackbar {...getBaseProps()} statusType="warning" data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSnackbar-warningModifier')).toBe(true);
});

test('it renders an "error" Snackbar', async () => {
  const { findByTestId } = renderWithTheme(
    <Snackbar {...getBaseProps()} statusType="error" data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSnackbar-errorModifier')).toBe(true);
});

test('it renders a "success" Snackbar', async () => {
  const { findByTestId } = renderWithTheme(
    <Snackbar {...getBaseProps()} statusType="success" data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSnackbar-successModifier')).toBe(true);
});

test('it renders a Snackbar with `role="alert"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Snackbar {...getBaseProps()} role="alert" data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toEqual('alert');
});

test('it renders a Snackbar with the provided "icon"', async () => {
  const { findByRole } = renderWithTheme(
    <Snackbar {...getBaseProps()} icon={IconComponent} data-testid={testId} />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(hasClass(icon, 'ChromaSnackbar-icon')).toBe(true);
});

test('it calls the provided "onClose" after the duration has passed', async () => {
  const mockFn = jest.fn();

  renderWithTheme(
    <Snackbar
      {...getBaseProps()}
      duration={100}
      onClose={mockFn}
      data-testid={testId}
    />
  );

  await waitFor(() => expect(mockFn).toBeCalledTimes(1));
});

test('it renders a dismissible Snackbar', async () => {
  const mockFn = jest.fn();

  const { findByLabelText } = renderWithTheme(
    <Snackbar {...getBaseProps()} allowDismiss onClose={mockFn} />
  );

  const button = await findByLabelText('Close Notification');
  fireEvent.click(button);

  await waitFor(() => expect(mockFn).toBeCalledTimes(1));
});

it('renders a Snackbar with the default duration', () => {
  jest.useFakeTimers();
  const handleClose = jest.fn();
  renderWithTheme(<Snackbar isOpen={true} onClose={handleClose} />);

  expect(handleClose).not.toHaveBeenCalled();
  jest.runAllTimers();
  expect(handleClose).toHaveBeenCalled();

  jest.useRealTimers();
});

it('renders a Snackbar with the default isOpen', () => {
  const { queryByTestId } = renderWithTheme(<Snackbar data-testid={testId} />);

  const root = queryByTestId(testId);

  expect(root).toBeNull();
});

test('it does not schedule the Snackbar to close if it is not already open', () => {
  const setTimeoutSpy = jest.spyOn(window, 'setTimeout');
  jest.useFakeTimers();

  renderWithTheme(<Snackbar duration={1500} isOpen={false} />);

  jest.runAllTimers();

  expect(setTimeoutSpy).toBeCalledTimes(0);
  jest.useRealTimers();
});

test('it renders children if we have children', () => {
  const { queryByTestId } = renderWithTheme(
    <Snackbar {...getBaseProps()}>
      <p data-testid="a child"></p>
    </Snackbar>
  );

  const child = queryByTestId('a child');

  expect(child).not.toBeNull();
});

test('it does not render the title if we have children', () => {
  const { queryByText } = renderWithTheme(
    <Snackbar {...getBaseProps()}>
      <p></p>
    </Snackbar>
  );

  const textNode = queryByText(getBaseProps().title!);

  expect(textNode).toBeNull();
});
