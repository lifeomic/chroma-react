import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Breadcrumb, BreadcrumbProps } from './index';

const testId = 'Breadcrumb';

const getBaseProps = (): BreadcrumbProps => ({
  text: 'text',
  url: 'url',
});

test('it renders a Breadcrumb', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumb {...props} data-testid={testId} />
    </MemoryRouter>
  );
  const breadcrumb = await findByTestId(testId);
  expect(breadcrumb).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumb
        {...props}
        data-testid={testId}
        className="custom-class-name"
      />
    </MemoryRouter>
  );
  const breadcrumb = await findByTestId(testId);
  expect(breadcrumb.classList.contains('custom-class-name')).true;
});

test('it applies `color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumb {...props} data-testid={testId} color="inverse" />
    </MemoryRouter>
  );
  const breadcrumb = await findByTestId(testId);
  expect(breadcrumb.classList.contains('ChromaBreadcrumb-rootInverse')).true;

  const link = await findByText(props.text);
  expect(link.classList.contains('ChromaBreadcrumb-linkInverse')).true;
});

test('it applies `aria-current="page"` when `isCurrentPage`', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumb {...props} data-testid={testId} isCurrentPage />
    </MemoryRouter>
  );

  const breadcrumb = await findByText(props.text);
  expect(breadcrumb.getAttribute('aria-current')).toEqual('page');
});

test('it does not apply the "aria-current" attribute by default', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumb {...props} data-testid={testId} />
    </MemoryRouter>
  );

  const breadcrumb = await findByText(props.text);
  expect(breadcrumb.getAttribute('aria-current')).toBeFalsy();
});

test('it renders a breadcrumb with the provided url', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <MemoryRouter>
      <Breadcrumb
        {...props}
        data-testid={testId}
        className="custom-class-name"
      />
    </MemoryRouter>
  );
  const breadcrumb = await findByText(props.text);
  expect(breadcrumb.getAttribute('href')).toEqual(`/${props.url}`);
});
