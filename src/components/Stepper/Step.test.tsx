import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
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
  expect(hasClass(icon, 'ChromaStep-icon')).toBe(true);
});

test('it renders a title', async () => {
  const { findByText } = renderWithTheme(
    <Step data-testid={testId} icon={IconComponent} title="foo" />
  );

  const title = await findByText(/foo/);
  expect(title).toBeInTheDocument();
  expect(hasClass(title, 'ChromaStep-title')).toBe(true);
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
  expect(hasClass(subtitle, 'ChromaStep-title')).toBe(true);
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
  expect(hasClass(pill, 'ChromaStep-pillSubTitle')).toBe(true);
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
  expect(hasClass(root, 'custom-class-name')).toBe(true);
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
  expect(hasClass(root, 'ChromaStep-activeRoot')).toBe(true);

  const title = await findByText('title');
  expect(hasClass(title, 'ChromaStep-activeTitle')).toBe(true);

  const subtitle = await findByText('subtitle');
  expect(hasClass(subtitle, 'ChromaStep-activeTitle')).toBe(true);

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaStep-activeIcon')).toBe(true);
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
  expect(hasClass(root, 'ChromaStep-activeRoot')).toBe(true);

  const title = await findByText('title');
  expect(hasClass(title, 'ChromaStep-activeTitle')).toBe(true);

  const subtitle = await findByText('subtitle');
  expect(hasClass(subtitle, 'ChromaStep-activeTitle')).toBe(true);

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaStep-activeIcon')).toBe(true);
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
  expect(hasClass(root, 'ChromaStep-completedRoot')).toBe(true);

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaStep-completedIcon')).toBe(true);
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
  expect(hasClass(root, 'ChromaStep-completedRoot')).toBe(true);

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaStep-completedIcon')).toBe(true);
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
  expect(hasClass(pill, 'ChromaStep-completedPillSubTitle')).toBe(true);
});
