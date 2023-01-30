import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Header } from './index';

const testId = 'Header';

test('it renders a Header', async () => {
  const { findByTestId, findByRole } = renderWithTheme(
    <Header data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();

  const banner = await findByRole('banner');
  expect(banner).toBeTruthy();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Header data-testid={testId} className="custom-class" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

test('it renders the content passed for logo', async () => {
  const { findByRole } = renderWithTheme(
    <Header data-testid={testId} logo={<div>Logo</div>} />
  );

  const logoContainer = await findByRole('presentation');
  expect(logoContainer).toBeInTheDocument();
  expect(hasClass(logoContainer, 'ChromaHeader-container')).toBe(true);
  expect(hasClass(logoContainer, 'ChromaHeader-logo')).toBe(true);
});

test('it renders the logo as centered with "centerLogo"', async () => {
  const { findByRole } = renderWithTheme(
    <Header data-testid={testId} logo={<div>Logo</div>} centerLogo />
  );

  const logoContainer = await findByRole('presentation');
  expect(hasClass(logoContainer, 'ChromaHeader-centerLogo')).toBe(true);
});

test('it renders the content passed for left', async () => {
  const { findByTestId } = renderWithTheme(
    <Header left={<div data-testid={testId}>Left</div>} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders the content passed for right', async () => {
  const { findByTestId } = renderWithTheme(
    <Header right={<div data-testid={testId}>Right</div>} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});
