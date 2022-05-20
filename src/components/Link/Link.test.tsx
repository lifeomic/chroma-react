import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Link, LinkProps } from './';

const testId = 'Link';

const getBaseProps = (): LinkProps => ({
  to: 'https://www.lifeomic.com',
});

test('it renders a Link', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link data-testid={testId} {...props}>
        Link
      </Link>
    </MemoryRouter>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders with `newTab`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link data-testid={testId} {...props} newTab>
        Link
      </Link>
    </MemoryRouter>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('target')).toEqual('_blank');
  expect(root.getAttribute('rel')).toEqual('noopener noreferrer');
});

test('it renders with `color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link data-testid={testId} {...props} color="inverse">
        Link
      </Link>
    </MemoryRouter>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaLink-inverse');
});

test('it renders with `color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link data-testid={testId} {...props} color="negative">
        Link
      </Link>
    </MemoryRouter>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaLink-negative');
});

test('it renders with `color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link data-testid={testId} {...props} color="positive">
        Link
      </Link>
    </MemoryRouter>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaLink-positive');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link data-testid={testId} {...props} className="custom-class-name">
        Link
      </Link>
    </MemoryRouter>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});
