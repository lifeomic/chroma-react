import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { LayoutManagerContextProvider } from './PrimaryNavigation.test';
import {
  PrimaryNavigationExpansionItem,
  PrimaryNavigationExpansionItemProps,
} from './';

const testId = 'PrimaryNavigationExpansionItem';

const getBaseProps = (): PrimaryNavigationExpansionItemProps => ({
  to: 'to',
  label: 'label',
  icon: <IconComponent />,
});

test('it renders a PrimaryNavigationExpansionItem', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationExpansionItem {...props} data-testid={testId} />
    </MemoryRouter>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.nodeName).toEqual('LI');
});

test('it renders the label', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationExpansionItem {...props} data-testid={testId} />
    </MemoryRouter>
  );
  const label = await findByText(/label/);
  expect(label).toBeInTheDocument();
});

test('it renders the beta badge', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationExpansionItem
        {...props}
        data-testid={testId}
        betaLabelText="beta"
        beta
      />
    </MemoryRouter>
  );
  const beta = await findByText(/beta/);
  expect(beta).toBeInTheDocument();
});

test('it renders the expansion Plus icon', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationExpansionItem {...props} data-testid={testId} />
    </MemoryRouter>
  );
  const plus = await findByRole('presentation');
  expect(plus).toBeInTheDocument();
});

test('it renders children', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationExpansionItem {...props}>
        <li data-testid={testId}>child</li>
      </PrimaryNavigationExpansionItem>
    </MemoryRouter>
  );
  const child = await findByTestId(testId);
  expect(child).toBeInTheDocument();
});

test('it hides the beta element when the sidebar is collapsed', async () => {
  const props = getBaseProps();
  const { queryByText } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed>
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigationExpansionItem
          {...props}
          data-testid={testId}
          betaLabelText="beta"
          beta
        />
      </MemoryRouter>
    </LayoutManagerContextProvider>
  );
  const beta = queryByText(/beta/);
  expect(beta).toBeNull();
});

test('it hides the expansion Plus icon when the sidebar is collapsed', async () => {
  const props = getBaseProps();
  const { queryByRole } = renderWithTheme(
    <LayoutManagerContextProvider isSidebarCollapsed>
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigationExpansionItem {...props} data-testid={testId} />
      </MemoryRouter>
    </LayoutManagerContextProvider>
  );
  const plus = queryByRole('presentation');
  expect(plus).toBeNull();
});
