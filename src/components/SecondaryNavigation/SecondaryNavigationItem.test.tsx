import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
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
  expect(link).toHaveClass('ChromaSecondaryNavigationItem-link');
  expect(link).not.toHaveClass('ChromaSecondaryNavigationItem-linkActive');
  expect(link?.getAttribute('href')).toEqual(`/${props.to}`);

  const selectorBar = await findByRole('presentation');
  expect(selectorBar).toBeInTheDocument();
  expect(selectorBar).toHaveClass('ChromaSecondaryNavigationItem-selector');
  expect(selectorBar).not.toHaveClass(
    'ChromaSecondaryNavigationItem-selectorActive'
  );
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
  expect(root).toHaveClass('custom-class-name');
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
  expect(link).toHaveClass('ChromaSecondaryNavigationItem-linkActive');

  const selectorBar = await findByRole('presentation');
  expect(selectorBar).toHaveClass(
    'ChromaSecondaryNavigationItem-selectorActive'
  );
});
