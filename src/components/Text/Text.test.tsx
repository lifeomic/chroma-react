import * as React from 'react';
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
  expect(root).toHaveClass('ChromaText-root');
  expect(root).toHaveClass('ChromaText-body');
  expect(root).toHaveClass('ChromaText-weightRegular');
  expect(root).not.toHaveClass('ChromaText-familyMonospace');
  expect(root).not.toHaveClass('ChromaText-inverseColor');
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
  expect(root).toHaveClass('ChromaText-familySecondary');
});

test('it renders monospace font', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} family="monospace">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-familyMonospace');
});

test('it renders light weight text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} weight="light">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-weightLight');
});

test('it renders regular weight text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} weight="regular">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-weightRegular');
});

test('it renders bold weight text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} weight="bold">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-weightBold');
});

test('it renders body text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="body">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-body');
});

test('it renders subbody text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="subbody">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-subbody');
});

test('it renders table text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="table">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-table');
});

test('it renders caption text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="caption">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-caption');
});

test('it renders button text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="button">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-button');
});

test('it renders tooltip text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="tooltip">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-tooltip');
});

test('it renders code text', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} size="code">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-code');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} className="custom-class-name">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it applies the inverse class when `color="inverse"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} color="inverse">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-inverseColor');
});

test('it applies the negative class when `color="negative"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} color="negative">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-negativeColor');
});

test('it applies the positive class when `color="positive"`', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} color="positive">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-positiveColor');
});

test('it applies the marginBottom class when "marginBottom"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} marginBottom>
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-marginBottom');
});

test('it renders align="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="center">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-alignCenter');
});

test('it renders align="justify"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="justify">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-alignJustify');
});

test('it renders align="left"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="left">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-alignLeft');
});

test('it renders align="right"', async () => {
  const { findByTestId } = renderWithTheme(
    <Text data-testid={testId} align="right">
      test
    </Text>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaText-alignRight');
});
