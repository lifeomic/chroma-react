import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Box } from './index';

const testId = 'Box';

test('it renders a Box', async () => {
  const { findByTestId } = renderWithTheme(<Box data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-root');
});

test('it renders a Box with direction="row"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box direction="row" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-directionRow');
});

test('it renders a Box with direction="column"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box direction="column" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-directionColumn');
});

test('it renders a Box with align="baseline"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="baseline" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-alignBaseline');
});

test('it renders a Box with align="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="center" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-alignCenter');
});

test('it renders a Box with align="flex-start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="flex-start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-alignStart');
});

test('it renders a Box with align="flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="flex-end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-alignEnd');
});

test('it renders a Box with justify="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="center" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-justifyCenter');
});

test('it renders a Box with justify="flex-start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="flex-start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-justifyStart');
});

test('it renders a Box with justify="space-between"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="space-between" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-justifyBetween');
});

test('it renders a Box with justify="space-evenly"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="space-evenly" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-justifyEvenly');
});

test('it renders a Box with justify="flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="flex-end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-justifyEnd');
});

test('it renders a Box with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Box className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders a Box with "fullWidth"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box fullWidth data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-fullWidth');
});

test('it renders a Box with "fullHeight"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box fullHeight data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-fullHeight');
});

test('it renders a Box with combined props', async () => {
  const { findByTestId } = renderWithTheme(
    <Box
      className="custom-class-name"
      justify="center"
      align="center"
      fullWidth
      fullHeight
      data-testid={testId}
    />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
  expect(root).toHaveClass('ChromaBox-justifyCenter');
  expect(root).toHaveClass('ChromaBox-alignCenter');
  expect(root).toHaveClass('ChromaBox-fullWidth');
  expect(root).toHaveClass('ChromaBox-fullHeight');
});

test('it renders a Box with combined CSS props', async () => {
  const { findByTestId } = renderWithTheme(
    <Box
      margin="20px"
      marginTop={1}
      marginBottom={1}
      marginLeft={1}
      marginRight={1}
      marginX={1}
      marginY={1}
      padding="20rem"
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={1}
      paddingRight={1}
      paddingX={1}
      paddingY={1}
      height="50%"
      width="50%"
      borderRadius
      color="#fff"
      bgColor="primary.main"
      data-testid={testId}
    />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaBox-height');
  expect(root).toHaveClass('ChromaBox-width');
  expect(root).toHaveClass('ChromaBox-margin');
  expect(root).toHaveClass('ChromaBox-marginTop');
  expect(root).toHaveClass('ChromaBox-marginBottom');
  expect(root).toHaveClass('ChromaBox-marginLeft');
  expect(root).toHaveClass('ChromaBox-marginRight');
  expect(root).toHaveClass('ChromaBox-marginX');
  expect(root).toHaveClass('ChromaBox-marginY');
  expect(root).toHaveClass('ChromaBox-padding');
  expect(root).toHaveClass('ChromaBox-paddingTop');
  expect(root).toHaveClass('ChromaBox-paddingBottom');
  expect(root).toHaveClass('ChromaBox-paddingLeft');
  expect(root).toHaveClass('ChromaBox-paddingRight');
  expect(root).toHaveClass('ChromaBox-paddingX');
  expect(root).toHaveClass('ChromaBox-paddingY');
  expect(root).toHaveClass('ChromaBox-borderRadius');
  expect(root).toHaveClass('ChromaBox-color');
  expect(root).toHaveClass('ChromaBox-bgColor');
});
