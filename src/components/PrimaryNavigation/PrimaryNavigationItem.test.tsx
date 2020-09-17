import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PrimaryNavigationItem, PrimaryNavigationItemProps } from './';

const testId = 'PrimaryNavigationExpansionItem';

const getBaseProps = (): PrimaryNavigationItemProps => ({
  to: 'to',
  label: 'label',
  icon: <IconComponent />,
});

test('it renders a NavigationItem', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationItem data-testid={testId} {...props} />
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
      <PrimaryNavigationItem {...props} data-testid={testId} />
    </MemoryRouter>
  );
  const label = await findByText(/label/);
  expect(label).toBeInTheDocument();
});

test('it renders the beta badge', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <PrimaryNavigationItem
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
