import * as React from 'react';
import {
  IconComponent,
  testId as iconComponentTestId,
} from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Button, ButtonProps } from './index';

const testId = 'Button';

const getBaseProps = (): ButtonProps => ({});

test('it renders a Button', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId}>
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toBeInTheDocument();
  expect(button.getAttribute('type')).toEqual('button');
  expect(button.getAttribute('tabIndex')).toEqual('0');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} className="custom-class-name">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('custom-class-name')).true;
});

test('it renders an icon with the "icon" class name', () => {
  const { getByRole } = renderWithTheme(
    <Button icon={IconComponent}>Button</Button>
  );
  const icon = getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon.classList.contains('ChromaButton-icon')).true;
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} fullWidth>
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-fullWidth')).true;
});

test('it renders with `variant="outlined"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="outlined">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-outlined')).true;
});

test('it renders with `variant="text"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="text">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-text')).true;
});

test('it renders a disabled button', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} disabled>
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button).toBeDisabled();
  expect(button.getAttribute('tabIndex')).toEqual('-1');
});

// #region inverse tests
test('it renders with `variant="contained" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="contained" color="inverse">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-containedInverse')).true;
});

test('it renders with `variant="outlined" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="outlined" color="inverse">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-outlinedInverse')).true;
});

test('it renders with `variant="text" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="text" color="inverse">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-textInverse')).true;
});
// #endregion

// #region negative tests
test('it renders with `variant="contained" color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button
      {...props}
      data-testid={testId}
      variant="contained"
      color="negative"
    >
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-containedNegative')).true;
});

test('it renders with `variant="outlined" color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="outlined" color="negative">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-outlinedNegative')).true;
});

test('it renders with `variant="text" color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="text" color="negative">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-textNegative')).true;
});
// #endregion

// #region positive tests
test('it renders with `variant="contained" color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button
      {...props}
      data-testid={testId}
      variant="contained"
      color="positive"
    >
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-containedPositive')).true;
});

test('it renders with `variant="outlined" color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="outlined" color="positive">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-outlinedPositive')).true;
});

test('it renders with `variant="text" color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} variant="text" color="positive">
      Button
    </Button>
  );
  const button = await findByTestId(testId);
  expect(button.classList.contains('ChromaButton-textPositive')).true;
});
// #endregion

// #region trailing icon tests
test('it renders a trailing icon', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Button {...props} data-testid={testId} trailingIcon={IconComponent}>
      Button
    </Button>
  );
  const trailingIcon = await findByTestId(iconComponentTestId);
  expect(trailingIcon).toBeInTheDocument();
  expect(trailingIcon.classList.contains('ChromaButton-trailingIcon')).true;
});
// #endregion
