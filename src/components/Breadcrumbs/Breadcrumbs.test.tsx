import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Breadcrumbs, BreadcrumbsProps } from './index';

const testId = 'Breadcrumbs';

const getBaseProps = (): BreadcrumbsProps => ({
  crumbs: [
    { text: 'parent', url: 'p' },
    { text: 'child', url: 'c' },
  ],
});

test('it renders Breadcrumbs', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumbs {...props} data-testid={testId} />
    </MemoryRouter>
  );
  const breadcrumbs = await findByTestId(testId);
  expect(breadcrumbs).toBeInTheDocument();

  const parentLink = await findByText(props.crumbs[0].text);
  expect(parentLink).toBeInTheDocument();

  const childLink = await findByText(props.crumbs[1].text);
  expect(childLink).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumbs
        {...props}
        data-testid={testId}
        className="custom-class-name"
      />
    </MemoryRouter>
  );
  const breadcrumbs = await findByTestId(testId);
  expect(breadcrumbs.classList.contains('custom-class-name')).true;
});

test('it applies `color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumbs {...props} data-testid={testId} color="inverse" />
    </MemoryRouter>
  );
  const breadcrumbs = await findByTestId(testId);
  expect(breadcrumbs.classList.contains('ChromaBreadcrumbs-inverse')).true;
});
