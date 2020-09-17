import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Step, Stepper } from './index';

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={0}>
      <Step data-testid={testId} icon={IconComponent} title="foo" />
    </Stepper>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

test('it renders children as buttons', async () => {
  const testId = 'buttons';
  const { findAllByTestId } = renderWithTheme(
    <Stepper activeStep={0} as="button">
      <Step data-testid={testId} icon={IconComponent} title="foo" />
      <Step data-testid={testId} icon={IconComponent} title="bar" />
    </Stepper>
  );

  const children = await findAllByTestId(testId);
  children.forEach((child) => {
    expect(child.nodeName).toEqual('BUTTON');
  });
});

test('it renders children as divs', async () => {
  const testId = 'divs';
  const { findAllByTestId } = renderWithTheme(
    <Stepper activeStep={0} as="div">
      <Step data-testid={testId} icon={IconComponent} title="foo" />
      <Step data-testid={testId} icon={IconComponent} title="bar" />
    </Stepper>
  );

  const children = await findAllByTestId(testId);
  children.forEach((child) => {
    expect(child.nodeName).toEqual('DIV');
  });
});

test('it applies active class to the correct child', async () => {
  const testId = 'active';
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={1}>
      <Step icon={IconComponent} title="foo" />
      <Step data-testid={testId} icon={IconComponent} title="bar" />
    </Stepper>
  );

  const active = await findByTestId(testId);
  expect(active).toHaveClass('ChromaStep-activeRoot');
});

test('it applies completed class to the correct children', async () => {
  const testId = 'completed';
  const { findAllByTestId } = renderWithTheme(
    <Stepper activeStep={2}>
      <Step data-testid={testId} icon={IconComponent} title="foo" />
      <Step data-testid={testId} icon={IconComponent} title="foo" />
      <Step icon={IconComponent} title="bar" />
    </Stepper>
  );

  const children = await findAllByTestId(testId);
  children.forEach((child) =>
    expect(child).toHaveClass('ChromaStep-completedRoot')
  );
});

test('it does not apply active or completed class to the correct inactive children', async () => {
  const testId = 'inactive';
  const { findAllByTestId } = renderWithTheme(
    <Stepper activeStep={1}>
      <Step icon={IconComponent} title="foo" />
      <Step icon={IconComponent} title="foo" />
      <Step data-testid={testId} icon={IconComponent} title="bar" />
      <Step data-testid={testId} icon={IconComponent} title="bar" />
    </Stepper>
  );

  const children = await findAllByTestId(testId);
  children.forEach((child) =>
    expect(child).not.toHaveClass(
      'makeStyles-activeRoot, makeStyles-completedRoot'
    )
  );
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={0} className="custom-class-name" data-testid="stepper">
      <Step icon={IconComponent} title="foo" />
    </Stepper>
  );
  const root = await findByTestId('stepper');
  expect(root).toHaveClass('custom-class-name');
});

test('it sets the active child based on "activeStep"', async () => {
  const testId = 'step';
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={1}>
      <Step icon={IconComponent} title="not-active" />
      <Step data-testid={testId} icon={IconComponent} title="active" />
    </Stepper>
  );

  const step = await findByTestId(testId);
  expect(step).toBeInTheDocument();
  expect(step).toHaveClass('ChromaStep-activeRoot');
});
