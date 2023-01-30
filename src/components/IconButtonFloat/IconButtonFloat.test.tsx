import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconButtonFloat, IconButtonFloatProps } from './index';

const testId = 'IconButtonFloat';

const getBaseProps = (): IconButtonFloatProps => ({
  'aria-label': 'dummy',
  icon: IconComponent,
});

test('it renders an IconButtonFloat', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} />
  );
  const buttonFloat = await findByTestId(testId);
  expect(buttonFloat).toBeInTheDocument();
  expect(buttonFloat.getAttribute('type')).toEqual('button');
  expect(buttonFloat.getAttribute('tabIndex')).toEqual('0');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat
      {...props}
      data-testid={testId}
      className="custom-class-name"
    />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'custom-class-name')).toBe(true);
});

test('it renders with `size={0}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} size={0} />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-size0')).toBe(true);
});

test('it renders with `size={1}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} size={1} />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-size1')).toBe(true);
});

test('it renders with `size={2}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} size={2} />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-size2')).toBe(true);
});

test('it renders with `justify="left"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} justify="left" />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-justifyLeft')).toBe(true);
});

test('it renders with `justify="center"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} justify="center" />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-justifyCenter')).toBe(
    true
  );
});

test('it renders with `justify="right"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} justify="right" />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-justifyRight')).toBe(
    true
  );
});

test('it renders with `align="top"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} align="top" />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-alignTop')).toBe(true);
});

test('it renders with `align="center"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} align="center" />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-alignCenter')).toBe(true);
});

test('it renders with `align="bottom"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} align="bottom" />
  );
  const buttonFloat = await findByTestId(testId);
  expect(hasClass(buttonFloat, 'ChromaIconButtonFloat-alignBottom')).toBe(true);
});

test('it renders a disabled IconButtonFloat', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButtonFloat {...props} data-testid={testId} disabled />
  );
  const buttonFloat = await findByTestId(testId);
  expect(buttonFloat).toBeDisabled();
  expect(buttonFloat.getAttribute('tabIndex')).toEqual('-1');
});
