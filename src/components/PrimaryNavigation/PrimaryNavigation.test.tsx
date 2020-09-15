import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import {
  LayoutManagerContext,
  LayoutManagerContextValue,
} from '../LayoutManager';
import { PrimaryNavigation, PrimaryNavigationTestIds } from './';
import { testIds } from './PrimaryNavigation';

const testId = 'PrimaryNavigation';

export const LayoutManagerContextProvider: React.FC<Partial<
  LayoutManagerContextValue
>> = ({
  children,
  isSidebarCollapsed = false,
  toggleSidebarCollapsed = jest.fn(),
  isSidebarCollapseDisabled = false,
}) => (
  <LayoutManagerContext.Provider
    value={{
      isSidebarCollapsed,
      isSidebarCollapseDisabled,
      toggleSidebarCollapsed,
    }}
  >
    {children}
  </LayoutManagerContext.Provider>
);

test('it renders a PrimaryNavigation', async () => {
  const { findByTestId } = renderWithTheme(
    <LayoutManagerContextProvider>
      <PrimaryNavigation data-testid={testId} />
    </LayoutManagerContextProvider>
  );

  const root = await findByTestId(testId);
  expect(root.nodeName).toEqual('NAV');
  expect(root.getAttribute('aria-label')).toEqual('Primary');
  expect(root.getAttribute('role')).toEqual('navigation');
});

test('clicking the menu button changes "isOpen" state', async () => {
  const toggleSidebarCollapsed = jest.fn();
  const { findByTestId } = renderWithTheme(
    <LayoutManagerContextProvider
      toggleSidebarCollapsed={toggleSidebarCollapsed}
      isSidebarCollapseDisabled={false}
    >
      <PrimaryNavigation />
    </LayoutManagerContextProvider>
  );

  const button = await findByTestId(PrimaryNavigationTestIds.toggleButton);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(toggleSidebarCollapsed).toBeCalledTimes(1);
});

test('it renders children elements within the nav list', async () => {
  const testId = 'children';
  const { findAllByTestId } = renderWithTheme(
    <PrimaryNavigation>
      <li data-testid={testId}>Child Content</li>
      <li data-testid={testId}>Child Content</li>
    </PrimaryNavigation>
  );
  const children = await findAllByTestId(testId);
  expect(children.length).toBe(2);
  expect(children[0]).toBeVisible();
  expect(children[1]).toBeVisible();
});

test('it hides the header content when the sidebar is collapsed', async () => {
  const { queryByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed>
      <PrimaryNavigation header={<div data-testid="header" />} />
    </LayoutManagerContextProvider>
  );

  expect(queryByTestId('header')).toBeNull();
});

test('it displays and renders headerSection content when expanded', async () => {
  const { findByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed={false}>
      <PrimaryNavigation header={<div data-testid="header" />} />
    </LayoutManagerContextProvider>
  );

  const headerChildren = await findByTestId('header');
  expect(headerChildren).toBeTruthy();
});

test('it renders the headerMin component provided when collapsed', async () => {
  const { queryByLabelText } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed>
      <PrimaryNavigation headerMin={<div />} />
    </LayoutManagerContextProvider>
  );

  expect(
    queryByLabelText(/Navigation Header Section Collapsed/)
  ).toBeInTheDocument();
});

test('it hides the headerMin component expanded', async () => {
  const testId = 'headerMin';

  const { queryByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed={false}>
      <PrimaryNavigation headerMin={<div data-testid={testId} />} />
    </LayoutManagerContextProvider>
  );

  expect(queryByTestId(testId)).toBeNull();
});

test('it removes the footer content when *not* expanded', async () => {
  const { queryByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed>
      <PrimaryNavigation footer={<div data-testid="footer" />} />
    </LayoutManagerContextProvider>
  );

  expect(queryByTestId('footer')).toBeNull();
});

test('it displays and renders footer content when expanded', async () => {
  const { findByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed={false}>
      <PrimaryNavigation footer={<div data-testid="footer" />} />
    </LayoutManagerContextProvider>
  );

  const footerChildren = await findByTestId(/footer/);
  expect(footerChildren).toBeInTheDocument();
});

test('it hides the header content when omitted', async () => {
  const { queryByTestId } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed={false}>
      <PrimaryNavigation />
    </LayoutManagerContextProvider>
  );

  const headerToggle = await queryByTestId(testIds.headerRoot);
  expect(headerToggle).toBeNull();
});
