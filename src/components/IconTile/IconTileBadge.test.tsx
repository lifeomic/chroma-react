import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconTileBadge } from './index';

const testId = 'IconTileBadge';

test('it renders an IconTileBadge', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTileBadge data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTileBadge className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it spreads props', async () => {
  const role = 'link';

  const { findByTestId } = renderWithTheme(
    <IconTileBadge data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it renders the provided icon', async () => {
  const { getByRole } = renderWithTheme(
    <IconTileBadge data-testid={testId} icon={IconComponent} />
  );
  const root = getByRole('img', { hidden: true });
  expect(root).toBeInTheDocument();
  expect(hasClass(root, 'ChromaIconTileBadge-icon')).toBe(true);
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <IconTileBadge>
      <div data-testid={testId} />
    </IconTileBadge>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});
