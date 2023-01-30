import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import {
  IconComponent,
  testId as iconComponentTestId,
} from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { ButtonFloat, ButtonFloatProps } from './index';

const testId = 'ButtonFloat';

const getBaseProps = (): ButtonFloatProps => ({});

test('it renders an ButtonFloat', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId}>
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(buttonFloat).toBeInTheDocument();
  expect(buttonFloat.getAttribute('type')).toEqual('button');
  expect(buttonFloat.getAttribute('tabIndex')).toEqual('0');
});

test('it renders an icon with the "icon" class name', () => {
  const { getByRole } = renderWithTheme(
    <ButtonFloat icon={IconComponent}>Button Float</ButtonFloat>
  );
  const icon = getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(hasClass(icon, 'ChromaButtonFloat-icon')).toBe(true);
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} fullWidth>
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-fullWidth')).toBe(true);
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} className="custom-class-name">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'custom-class-name')).toBe(true);
});

test('it renders with `size={0}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} size={0}>
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-size0')).toBe(true);
});

test('it renders with `size={1}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} size={1}>
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-size1')).toBe(true);
});

test('it renders with `size={2}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} size={2}>
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-size2')).toBe(true);
});

test('it renders with `justify="left"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} justify="left">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-justifyLeft')).toBe(true);
});

test('it renders with `justify="center"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} justify="center">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-justifyCenter')).toBe(true);
});

test('it renders with `justify="right"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} justify="right">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-justifyRight')).toBe(true);
});

test('it renders with `align="top"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} align="top">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-alignTop')).toBe(true);
});

test('it renders with `align="center"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} align="center">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-alignCenter')).toBe(true);
});

test('it renders with `align="bottom"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} align="bottom">
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaButtonFloat-alignBottom')).toBe(true);
});

test('it renders a trailing icon', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} trailingIcon={IconComponent}>
      Button Float
    </ButtonFloat>
  );
  const trailingIcon = await findByTestId(iconComponentTestId);
  expect(trailingIcon).toBeInTheDocument();
  expect(hasClass(trailingIcon, 'ChromaButtonFloat-trailingIcon')).toBe(true);
});

test('it renders a disabled ButtonFloat', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFloat {...props} data-testid={testId} disabled>
      Button Float
    </ButtonFloat>
  );
  const buttonFloat = await findByTestId(testId);
  expect(buttonFloat).toBeDisabled();
  expect(buttonFloat.getAttribute('tabIndex')).toEqual('-1');
});
