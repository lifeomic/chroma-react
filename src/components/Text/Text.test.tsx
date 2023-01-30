import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Text } from './index';

const testId = 'Text';

test('it renders Text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId}>test</Text>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root?.nodeName).toEqual('P');
  expect(hasClass(root, 'ChromaText-root')).toBe(true);
  expect(hasClass(root, 'ChromaText-body')).toBe(true);
  expect(hasClass(root, 'ChromaText-weightRegular')).toBe(true);
  expect(hasClass(root, 'ChromaText-familyMonospace')).toBe(false);
  expect(hasClass(root, 'ChromaText-inverseColor')).toBe(false);
});

test('it renders Text as an "h6" when `size="headline"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="headline">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root?.nodeName).toEqual('H6');
});

test('it renders Text as an "h1" when `useH1`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} useH1>
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root?.nodeName).toEqual('H1');
});

test('it renders secondary font', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} family="secondary">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-familySecondary')).toBe(true);
});

test('it renders monospace font', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} family="monospace">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-familyMonospace')).toBe(true);
});

test('it renders light weight text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} weight="light">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-weightLight')).toBe(true);
});

test('it renders regular weight text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} weight="regular">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-weightRegular')).toBe(true);
});

test('it renders bold weight text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} weight="bold">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-weightBold')).toBe(true);
});

test('it renders body text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="body">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-body')).toBe(true);
});

test('it renders subbody text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="subbody">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-subbody')).toBe(true);
});

test('it renders table text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="table">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-table')).toBe(true);
});

test('it renders caption text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="caption">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-caption')).toBe(true);
});

test('it renders button text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="button">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-button')).toBe(true);
});

test('it renders tooltip text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="tooltip">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-tooltip')).toBe(true);
});

test('it renders code text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="code">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-code')).toBe(true);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} className="custom-class-name">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it applies the inverse class when `color="inverse"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} color="inverse">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-inverseColor')).toBe(true);
});

test('it applies the negative class when `color="negative"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} color="negative">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-negativeColor')).toBe(true);
});

test('it applies the positive class when `color="positive"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} color="positive">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-positiveColor')).toBe(true);
});

test('it applies the marginBottom class when "marginBottom"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} marginBottom>
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-marginBottom')).toBe(true);
});

test('it renders align="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="center">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-alignCenter')).toBe(true);
});

test('it renders align="justify"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="justify">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-alignJustify')).toBe(true);
});

test('it renders align="left"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="left">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-alignLeft')).toBe(true);
});

test('it renders align="right"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="right">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaText-alignRight')).toBe(true);
});
