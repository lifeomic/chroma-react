import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Pill } from './';

const testId = 'Pill';

test('it renders a Pill', async () => {
  const { findByTestId } = renderWithTheme(<Pill data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root).toHaveClass('ChromaPill-default');
});

test('it renders a Pill with a label', async () => {
  const { findByText } = renderWithTheme(
    <Pill data-testid={testId} label="pill" />
  );
  const root = await findByText(/pill/);
  expect(root).toBeInTheDocument();
});

test('it renders a Pill with primary "color"', async () => {
  const { findByTestId } = renderWithTheme(
    <Pill data-testid={testId} color="primary" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPill-primaryColor');
});

test('it renders a Pill with negative "color"', async () => {
  const { findByTestId } = renderWithTheme(
    <Pill data-testid={testId} color="negative" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPill-negative');
});

test('it renders a Pill with positive "color"', async () => {
  const { findByTestId } = renderWithTheme(
    <Pill data-testid={testId} color="positive" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPill-positive');
});

test('it renders a Pill with the highlight variant', async () => {
  const { findByTestId } = renderWithTheme(
    <Pill data-testid={testId} variant="highlight" />
  );
  const root = await findByTestId(testId);

  expect(root).toBeInTheDocument();
  expect(root).toHaveClass('ChromaPill-highlight');
});

test('it renders a Pill with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Pill data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders a Pill with the provided children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <Pill>
      <div data-testid={testId} />
    </Pill>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});
