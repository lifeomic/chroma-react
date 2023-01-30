import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SecondaryNavigationItem, SecondaryNavigationItemProps } from './';

const testId = 'SecondaryNavigationItem';

const getBaseProps = (): SecondaryNavigationItemProps => ({
  to: 'to',
  label: 'label',
});

test('it renders a SecondaryNavigationItem', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <MemoryRouter>
      <SecondaryNavigationItem data-testid={testId} {...props} />
    </MemoryRouter>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();

  const link = root.firstElementChild;
  expect(link?.nodeName).toEqual('A');
  expect(hasClass(link, 'ChromaSecondaryNavigationItem-link')).toBe(true);
  expect(hasClass(link, 'ChromaSecondaryNavigationItem-linkActive')).toBe(
    false
  );
  expect(link?.getAttribute('href')).toEqual(`/${props.to}`);

  const selectorBar = await findByRole('presentation');
  expect(selectorBar).toBeInTheDocument();
  expect(hasClass(selectorBar, 'ChromaSecondaryNavigationItem-selector')).toBe(
    true
  );
  expect(
    hasClass(selectorBar, 'ChromaSecondaryNavigationItem-selectorActive')
  ).toBe(false);
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter>
      <SecondaryNavigationItem
        data-testid={testId}
        className="custom-class-name"
        {...props}
      />
    </MemoryRouter>
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it applies the active classes when the route is active', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <SecondaryNavigationItem data-testid={testId} {...props} to="/" />
    </MemoryRouter>
  );

  const root = await findByTestId(testId);
  const link = root.firstElementChild;
  expect(hasClass(link, 'ChromaSecondaryNavigationItem-linkActive')).toBe(true);

  const selectorBar = await findByRole('presentation');
  expect(
    hasClass(selectorBar, 'ChromaSecondaryNavigationItem-selectorActive')
  ).toBe(true);
});
