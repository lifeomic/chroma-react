import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Step, Stepper } from './index';

const testId = 'Step';

test('it renders a Step', async () => {
  const { findByTestId, findByRole } = renderWithTheme(
    <Step data-testid={testId} icon={IconComponent} title="foo" />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.nodeName).toEqual('DIV');

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaStep-icon');
});

test('it renders a title', async () => {
  const { findByText } = renderWithTheme(
    <Step data-testid={testId} icon={IconComponent} title="foo" />
  );

  const title = await findByText(/foo/);
  expect(title).toBeInTheDocument();
  expect(title).toHaveClass('ChromaStep-title');
});

test('it renders a sub title', async () => {
  const { findByText } = renderWithTheme(
    <Step
      data-testid={testId}
      icon={IconComponent}
      title="foo"
      subTitle="bar"
    />
  );

  const subtitle = await findByText(/bar/);
  expect(subtitle).toBeInTheDocument();
  expect(subtitle).toHaveClass('ChromaStep-title');
});

test('it renders a sub title pill', async () => {
  const { findByText } = renderWithTheme(
    <Step
      data-testid={testId}
      icon={IconComponent}
      title="foo"
      subTitlePillLabel="300"
    />
  );

  const pill = await findByText(/300/);
  expect(pill).toBeInTheDocument();
  expect(pill).toHaveClass('ChromaStep-pillSubTitle');
});

test('it calls onClick', async () => {
  const mockFn = jest.fn();

  const { findByTestId } = renderWithTheme(
    <Step
      as="button"
      onClick={mockFn}
      data-testid={testId}
      icon={IconComponent}
      title="foo"
      subTitlePillLabel="300"
    />
  );

  const step = await findByTestId(testId);
  fireEvent.click(step);
  expect(mockFn).toBeCalledTimes(1);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Step
      className="custom-class-name"
      data-testid={testId}
      icon={IconComponent}
      title="foo"
    />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders a disabled step', async () => {
  const mockFn = jest.fn();

  const { findByTestId } = renderWithTheme(
    <Stepper activeStep={0} as="button" onClick={mockFn}>
      <Step
        className="step-root"
        data-testid={testId}
        disabled
        icon={IconComponent}
        title="foo"
      />
    </Stepper>
  );
  const root = await findByTestId(testId);
  expect(root).toBeDisabled();
});

test('it renders as a button', async () => {
  const { findByTestId } = renderWithTheme(
    <Step as="button" data-testid={testId} icon={IconComponent} title="title" />
  );

  const root = await findByTestId(testId);
  expect(root.nodeName).toEqual('BUTTON');
  expect(root).toHaveProperty('type', 'button');
});

test('it applies the correct classes for "active" as a div', async () => {
  const { findByTestId, findByText, findByRole } = renderWithTheme(
    <Step
      as="div"
      data-testid={testId}
      icon={IconComponent}
      title="title"
      subTitle="subtitle"
      active
    />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaStep-activeRoot');

  const title = await findByText('title');
  expect(title).toHaveClass('ChromaStep-activeTitle');

  const subtitle = await findByText('subtitle');
  expect(subtitle).toHaveClass('ChromaStep-activeTitle');

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaStep-activeIcon');
});

test('it applies the correct classes for "active" as a button', async () => {
  const { findByTestId, findByText, findByRole } = renderWithTheme(
    <Step
      as="button"
      data-testid={testId}
      icon={IconComponent}
      title="title"
      subTitle="subtitle"
      active
    />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaStep-activeRoot');

  const title = await findByText('title');
  expect(title).toHaveClass('ChromaStep-activeTitle');

  const subtitle = await findByText('subtitle');
  expect(subtitle).toHaveClass('ChromaStep-activeTitle');

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaStep-activeIcon');
});

test('it applies the correct classes for "completed" as a div', async () => {
  const { findByTestId, findByRole } = renderWithTheme(
    <Step
      as="div"
      data-testid={testId}
      icon={IconComponent}
      title="title"
      subTitle="subtitle"
      completed
    />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaStep-completedRoot');

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaStep-completedIcon');
});

test('it applies the correct classes for "completed" as a button', async () => {
  const { findByTestId, findByRole } = renderWithTheme(
    <Step
      as="button"
      data-testid={testId}
      icon={IconComponent}
      title="title"
      subTitle="subtitle"
      completed
    />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaStep-completedRoot');

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaStep-completedIcon');
});

test('it applies the correct classes for "completed" when provided with a subTitlePillLabel', async () => {
  const { findByText } = renderWithTheme(
    <Step
      data-testid={testId}
      icon={IconComponent}
      title="title"
      subTitlePillLabel="300"
      completed
    />
  );

  const pill = await findByText(/300/);
  expect(pill).toHaveClass('ChromaStep-completedPillSubTitle');
});
