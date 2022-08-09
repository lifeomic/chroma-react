import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { RadioGroup } from './index';
import { RadioGroupContext } from './useRadioGroup';

const testId = 'RadioGroup';

test('it renders a RadioGroup', async () => {
  const { findByTestId } = renderWithTheme(<RadioGroup data-testid={testId} />);

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaRadioGroup-root');
  expect(root.getAttribute('role')).toEqual('radiogroup');
});

test('it renders a title', async () => {
  const { findByText } = renderWithTheme(
    <RadioGroup title="Select one" data-testid={testId} />
  );

  const title = await findByText(/Select one/);
  expect(title).toBeInTheDocument();
  expect(title?.nodeName).toEqual('LEGEND');
});

test('it renders an inverse color RadioGroup', async () => {
  const { findByText } = renderWithTheme(
    <RadioGroup title="Select one" color="inverse" data-testid={testId} />
  );

  const title = await findByText(/Select one/);
  expect(title).toHaveClass('ChromaRadioGroup-legendInverse');
});

test('it renders an align center RadioGroup', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroup title="Select one" align="center">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const child = await findByTestId(testId);
  expect(child?.parentElement).toHaveClass('ChromaRadioGroup-alignCenter');
});

test('it renders a direction row RadioGroup', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroup title="Select one" direction="row">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const child = await findByTestId(testId);
  expect(child?.parentElement).toHaveClass('ChromaRadioGroup-directionRow');
});

test('it renders a justified center RadioGroup', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroup title="Select one" justify="center">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const child = await findByTestId(testId);
  expect(child?.parentElement).toHaveClass('ChromaRadioGroup-justifyCenter');
});

test('it renders a justified spaceBetween RadioGroup', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroup title="Select one" justify="space-between">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const child = await findByTestId(testId);
  expect(child?.parentElement).toHaveClass('ChromaRadioGroup-justifyBetween');
});

test('it renders a justified spaceEvenly RadioGroup', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroup title="Select one" justify="space-evenly">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const child = await findByTestId(testId);
  expect(child?.parentElement).toHaveClass('ChromaRadioGroup-justifyEvenly');
});

test('it renders children', async () => {
  const { findByTestId } = renderWithTheme(
    <RadioGroup title="Select one">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders an aria-label when not provided with title', async () => {
  const { findByText } = renderWithTheme(
    <RadioGroup title="" aria-label="aria-label-title">
      <input data-testid={testId} />
    </RadioGroup>
  );

  const ariaLabel = await findByText(/aria-label-title/);
  expect(ariaLabel).toBeInTheDocument();
  expect(ariaLabel?.nodeName).toEqual('LEGEND');
});

test('it uses the new value when the prop value changes', async () => {
  const TestComponent = ({ testValue }: { testValue: string }) => (
    <RadioGroup value={testValue}>
      <RadioGroupContext.Consumer>
        {({ value }) => <span>Current Value: {value}</span>}
      </RadioGroupContext.Consumer>
    </RadioGroup>
  );
  const { findByText, rerender } = renderWithTheme(
    <TestComponent testValue="INITIAL" />
  );

  rerender(<TestComponent testValue="UPDATED" />);

  const content = await findByText(/^Current Value:/);
  expect(content.textContent).toBe('Current Value: UPDATED');
});

test('it renders an * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <RadioGroup title="Select one" showRequiredLabel />
  );

  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(asterisk).toHaveClass('ChromaRadioGroup-required');
});

test('it renders an inverse color * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <RadioGroup title="Select one" color="inverse" showRequiredLabel />
  );

  const asterisk = await findByText('*');
  expect(asterisk).toHaveClass(
    'ChromaRadioGroup-required ChromaRadioGroup-requiredInverse'
  );
});
