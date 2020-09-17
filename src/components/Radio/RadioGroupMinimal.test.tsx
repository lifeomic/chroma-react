import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { RadioGroupMinimal } from './index';

const testId = 'RadioGroupMinimal';

test('it renders a RadioGroupMinimal', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroupMinimal data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaRadioGroupMinimal-root');
  expect(root.getAttribute('role')).toEqual('radiogroup');
});

test('it renders a title', async () => {
  const { findByLabelText } = renderWithTheme(
    <RadioGroupMinimal title="Select one" data-testid={testId} />
  );

  const title = await findByLabelText(/Select one/);
  expect(title).toBeInTheDocument();
  expect(title?.nodeName).toEqual('LEGEND');
});

test('it renders an inverse color RadioGroupMinimal', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroupMinimal title="Select one" color="inverse">
      <div data-testid={testId} />
    </RadioGroupMinimal>
  );

  const children = await findByTestId(testId);
  expect(children?.parentElement).toHaveClass(
    'ChromaRadioGroupMinimal-radiosInverse'
  );
});

test('it renders a direction row RadioGroupMinimal', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroupMinimal title="Select one" direction="row">
      <input data-testid={testId} />
    </RadioGroupMinimal>
  );

  const child = await findByTestId(testId);
  expect(child?.parentElement).toHaveClass(
    'ChromaRadioGroupMinimal-directionRow'
  );
});

test('it renders children', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroupMinimal title="Select one">
      <input data-testid={testId} />
    </RadioGroupMinimal>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});
