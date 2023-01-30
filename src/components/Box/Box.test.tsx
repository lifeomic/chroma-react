import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Box } from './index';

const testId = 'Box';

test('it renders a Box', async () => {
  const { findByTestId } = renderWithTheme(<Box data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-root')).toBe(true);
});

test('it renders a Box with direction="row"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box direction="row" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-directionRow')).toBe(true);
});

test('it renders a Box with direction="column"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box direction="column" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-directionColumn')).toBe(true);
});

test('it renders a Box with align="baseline"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="baseline" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-alignBaseline')).toBe(true);
});

test('it renders a Box with align="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="center" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-alignCenter')).toBe(true);
});

test('it renders a Box with align="start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-alignStart')).toBe(true);
});

test('it renders a Box with align="flex-start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="flex-start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-alignFlexStart')).toBe(true);
});

test('it renders a Box with align="end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-alignEnd')).toBe(true);
});

test('it renders a Box with align="flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="flex-end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-alignFlexEnd')).toBe(true);
});

test('it renders a Box with justify="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="center" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-justifyCenter')).toBe(true);
});

test('it renders a Box with justify="flex-start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="flex-start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-justifyStart')).toBe(true);
});

test('it renders a Box with justify="space-between"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="space-between" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-justifyBetween')).toBe(true);
});

test('it renders a Box with justify="space-evenly"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="space-evenly" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-justifyEvenly')).toBe(true);
});

test('it renders a Box with justify="flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="flex-end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-justifyEnd')).toBe(true);
});

test('it renders a Box with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Box className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it renders a Box with "fullWidth"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box fullWidth data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-fullWidth')).toBe(true);
});

test('it renders a Box with "fullHeight"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box fullHeight data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-fullHeight')).toBe(true);
});

test('it renders a Box with flexWrap', async () => {
  const { findByTestId } = renderWithTheme(
    <Box flexWrap data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-flexWrap')).toBe(true);
});

test('it renders a Box with flexChildren', async () => {
  const { findByTestId } = renderWithTheme(
    <Box flexChildren data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-flexChildren')).toBe(true);
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
  expect(hasClass(root, 'custom-class-name')).toBe(true);
  expect(hasClass(root, 'ChromaBox-justifyCenter')).toBe(true);
  expect(hasClass(root, 'ChromaBox-alignCenter')).toBe(true);
  expect(hasClass(root, 'ChromaBox-fullWidth')).toBe(true);
  expect(hasClass(root, 'ChromaBox-fullHeight')).toBe(true);
});

test('it renders a Box with combined CSS props', async () => {
  const { findByTestId } = renderWithTheme(
    <Box
      gap={2}
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
      flexWrap
      flexChildren
    />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaBox-height')).toBe(true);
  expect(hasClass(root, 'ChromaBox-width')).toBe(true);
  expect(hasClass(root, 'ChromaBox-gap')).toBe(true);
  expect(hasClass(root, 'ChromaBox-margin')).toBe(true);
  expect(hasClass(root, 'ChromaBox-marginTop')).toBe(true);
  expect(hasClass(root, 'ChromaBox-marginBottom')).toBe(true);
  expect(hasClass(root, 'ChromaBox-marginLeft')).toBe(true);
  expect(hasClass(root, 'ChromaBox-marginRight')).toBe(true);
  expect(hasClass(root, 'ChromaBox-marginX')).toBe(true);
  expect(hasClass(root, 'ChromaBox-marginY')).toBe(true);
  expect(hasClass(root, 'ChromaBox-padding')).toBe(true);
  expect(hasClass(root, 'ChromaBox-paddingTop')).toBe(true);
  expect(hasClass(root, 'ChromaBox-paddingBottom')).toBe(true);
  expect(hasClass(root, 'ChromaBox-paddingLeft')).toBe(true);
  expect(hasClass(root, 'ChromaBox-paddingRight')).toBe(true);
  expect(hasClass(root, 'ChromaBox-paddingX')).toBe(true);
  expect(hasClass(root, 'ChromaBox-paddingY')).toBe(true);
  expect(hasClass(root, 'ChromaBox-borderRadius')).toBe(true);
  expect(hasClass(root, 'ChromaBox-color')).toBe(true);
  expect(hasClass(root, 'ChromaBox-bgColor')).toBe(true);
  expect(hasClass(root, 'ChromaBox-flexWrap')).toBe(true);
  expect(hasClass(root, 'ChromaBox-flexChildren')).toBe(true);
});
