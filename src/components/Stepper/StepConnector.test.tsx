import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { StepConnector } from './index';

const testId = 'StepConnector';

test('it renders a StepConnector', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('role')).toEqual('presentation');
  expect(root).toHaveClass('ChromaStepConnector-connectorRoot');
});

test('it applies the class with hasSubTitle', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} hasSubTitle />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaStepConnector-subTitle');
});

test('it applies the class with hasSubTitlePill', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} hasSubTitlePill />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaStepConnector-subTitlePill');
});

test('it applies the activeLine class when "active"', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} active />
  );
  const root = await findByTestId(testId);
  expect(root?.firstElementChild).toHaveClass('ChromaStepConnector-activeLine');
});

test('it applies the activeLine class when "completed"', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} completed />
  );
  const root = await findByTestId(testId);
  expect(root?.firstElementChild).toHaveClass('ChromaStepConnector-activeLine');
});
