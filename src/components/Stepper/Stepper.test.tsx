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

test('it sets correct aria-label', async () => {
  const testId = 'step';
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={1}>
      <Step icon={IconComponent} title="not-active" />
      <Step data-testid={testId} icon={IconComponent} title="active" />
    </Stepper>
  );

  const step = await findByTestId(testId);
  expect(step).toBeInTheDocument();
  expect(step).toHaveAttribute('aria-label', 'Step 2 of 2');
});

test('it sets aria-current attribute on active step', async () => {
  const testId = 'step';
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={1}>
      <Step icon={IconComponent} title="not-active" />
      <Step data-testid={testId} icon={IconComponent} title="active" />
    </Stepper>
  );

  const step = await findByTestId(testId);
  expect(step.parentElement).toBeInTheDocument();
  expect(step.parentElement).toHaveAttribute('aria-current', 'step');
});

test('it does not set aria-current attribute on non active steps', async () => {
  const testId = 'step';
  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={1}>
      <Step data-testid={testId} icon={IconComponent} title="not-active" />
      <Step icon={IconComponent} title="active" />
    </Stepper>
  );

  const step = await findByTestId(testId);
  expect(step.parentElement).toBeInTheDocument();
  expect(step.parentElement).not.toHaveAttribute('aria-current', 'step');
});

test('it renders a Box with combined CSS props', async () => {
  const testId = 'step';
  const { findByTestId } = renderWithTheme(
    <Stepper
      activeStep={1}
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
      bgColor="primary.main"
      data-testid={testId}
    >
      <Step data-testid={testId} icon={IconComponent} title="foo" />
      <Step data-testid={testId} icon={IconComponent} title="bar" />
    </Stepper>
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
  expect(root).toHaveClass('ChromaBox-bgColor');
});
