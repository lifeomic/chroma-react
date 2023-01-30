import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
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
  expect(hasClass(root, 'ChromaStepConnector-connectorRoot')).toBe(true);
});

test('it applies the class with hasSubTitle', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} hasSubTitle />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaStepConnector-subTitle')).toBe(true);
});

test('it applies the class with hasSubTitlePill', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} hasSubTitlePill />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaStepConnector-subTitlePill')).toBe(true);
});

test('it applies the activeLine class when "active"', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} active />
  );
  const root = await findByTestId(testId);
  expect(
    hasClass(root?.firstElementChild, 'ChromaStepConnector-activeLine')
  ).toBe(true);
});

test('it applies the activeLine class when "completed"', async () => {
  const { findByTestId } = renderWithTheme(
    <StepConnector data-testid={testId} completed />
  );
  const root = await findByTestId(testId);
  expect(
    hasClass(root?.firstElementChild, 'ChromaStepConnector-activeLine')
  ).toBe(true);
});
