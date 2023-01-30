import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Header, HeaderProps } from './index';
import { fireEvent } from '@testing-library/dom';
import { hasClass } from '../../testUtils/hasClass';

const testId = 'Header';

const getBaseProps = (): HeaderProps => ({
  title: 'title',
  onClose: jest.fn(),
});

test('it renders a Header', async () => {
  const { findByTestId } = renderWithTheme(
    <Header {...getBaseProps()} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Header {...getBaseProps()} data-testid={testId} className="custom-class" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

test('it renders the close button', async () => {
  const { findByLabelText } = renderWithTheme(
    <Header {...getBaseProps()} data-testid={testId} />
  );

  const button = await findByLabelText(/Close panel/);
  expect(button).toBeInTheDocument();
});

test('it calls the provided "onClose" on-click', async () => {
  const mockFn = jest.fn();

  const { findByLabelText } = renderWithTheme(
    <Header {...getBaseProps()} onClose={mockFn} data-testid={testId} />
  );

  const button = await findByLabelText(/Close panel/);
  fireEvent.click(button);
  expect(mockFn).toBeCalledTimes(1);
});

test('it renders the provided title', async () => {
  const { findByText } = renderWithTheme(
    <Header {...getBaseProps()} data-testid={testId} title="SlideOverTitle" />
  );

  const title = await findByText(/SlideOverTitle/);
  expect(title).toBeInTheDocument();
});

test('it renders the provided children', async () => {
  const { findByTestId } = renderWithTheme(
    <Header {...getBaseProps()}>
      <p data-testid={testId}>children</p>
    </Header>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});
