import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { LayoutManagerContextProvider } from './PrimaryNavigation.test';
import { PrimaryNavigationSubItem, PrimaryNavigationSubItemProps } from './';

const testId = 'PrimaryNavigationSubItem';

const getBaseProps = (): PrimaryNavigationSubItemProps => ({
  to: 'to',
  label: 'label',
});

test('it renders a PrimaryNavigationSubItem', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed={false}>
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigationSubItem data-testid={testId} {...props} to="/" />
      </MemoryRouter>
    </LayoutManagerContextProvider>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.nodeName).toEqual('LI');

  const spacer = await findByRole('presentation', { hidden: true });
  expect(spacer).toBeInTheDocument();
});

test('it does nothing when the sidebar is collapsed', async () => {
  const props = getBaseProps();
  const { queryByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed>
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigationSubItem data-testid={testId} {...props} to="/" />
      </MemoryRouter>
    </LayoutManagerContextProvider>
  );

  const root = queryByTestId(testId);
  expect(root).toBeNull();
});

test('it displays the label when the sidebar is open', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed={false}>
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigationSubItem {...props} to="/" />
      </MemoryRouter>
    </LayoutManagerContextProvider>
  );

  const label = await findByText(/label/);
  expect(label).toBeInTheDocument();
});
