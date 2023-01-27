import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Box } from './index';

const testId = 'Box';

test('it renders a Box', async () => {
  const { findByTestId } = renderWithTheme(<Box data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-root')).true;
});

test('it renders a Box with direction="row"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box direction="row" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-directionRow')).true;
});

test('it renders a Box with direction="column"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box direction="column" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-directionColumn')).true;
});

test('it renders a Box with align="baseline"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="baseline" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-alignBaseline')).true;
});

test('it renders a Box with align="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="center" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-alignCenter')).true;
});

test('it renders a Box with align="start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-alignStart')).true;
});

test('it renders a Box with align="flex-start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="flex-start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-alignFlexStart')).true;
});

test('it renders a Box with align="end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-alignEnd')).true;
});

test('it renders a Box with align="flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box align="flex-end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-alignFlexEnd')).true;
});

test('it renders a Box with justify="center"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="center" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-justifyCenter')).true;
});

test('it renders a Box with justify="flex-start"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="flex-start" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-justifyStart')).true;
});

test('it renders a Box with justify="space-between"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="space-between" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-justifyBetween')).true;
});

test('it renders a Box with justify="space-evenly"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="space-evenly" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-justifyEvenly')).true;
});

test('it renders a Box with justify="flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box justify="flex-end" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-justifyEnd')).true;
});

test('it renders a Box with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Box className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('custom-class-name')).true;
});

test('it renders a Box with "fullWidth"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box fullWidth data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-fullWidth')).true;
});

test('it renders a Box with "fullHeight"', async () => {
  const { findByTestId } = renderWithTheme(
    <Box fullHeight data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-fullHeight')).true;
});

test('it renders a Box with flexWrap', async () => {
  const { findByTestId } = renderWithTheme(
    <Box flexWrap data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-flexWrap')).true;
});

test('it renders a Box with flexChildren', async () => {
  const { findByTestId } = renderWithTheme(
    <Box flexChildren data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaBox-flexChildren')).true;
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
  expect(root.classList.contains('custom-class-name')).true;
  expect(root.classList.contains('ChromaBox-justifyCenter')).true;
  expect(root.classList.contains('ChromaBox-alignCenter')).true;
  expect(root.classList.contains('ChromaBox-fullWidth')).true;
  expect(root.classList.contains('ChromaBox-fullHeight')).true;
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
  expect(root.classList.contains('ChromaBox-height')).true;
  expect(root.classList.contains('ChromaBox-width')).true;
  expect(root.classList.contains('ChromaBox-gap')).true;
  expect(root.classList.contains('ChromaBox-margin')).true;
  expect(root.classList.contains('ChromaBox-marginTop')).true;
  expect(root.classList.contains('ChromaBox-marginBottom')).true;
  expect(root.classList.contains('ChromaBox-marginLeft')).true;
  expect(root.classList.contains('ChromaBox-marginRight')).true;
  expect(root.classList.contains('ChromaBox-marginX')).true;
  expect(root.classList.contains('ChromaBox-marginY')).true;
  expect(root.classList.contains('ChromaBox-padding')).true;
  expect(root.classList.contains('ChromaBox-paddingTop')).true;
  expect(root.classList.contains('ChromaBox-paddingBottom')).true;
  expect(root.classList.contains('ChromaBox-paddingLeft')).true;
  expect(root.classList.contains('ChromaBox-paddingRight')).true;
  expect(root.classList.contains('ChromaBox-paddingX')).true;
  expect(root.classList.contains('ChromaBox-paddingY')).true;
  expect(root.classList.contains('ChromaBox-borderRadius')).true;
  expect(root.classList.contains('ChromaBox-color')).true;
  expect(root.classList.contains('ChromaBox-bgColor')).true;
  expect(root.classList.contains('ChromaBox-flexWrap')).true;
  expect(root.classList.contains('ChromaBox-flexChildren')).true;
});
