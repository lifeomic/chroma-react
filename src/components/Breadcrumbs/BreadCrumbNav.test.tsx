import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { BreadcrumbNav } from './index';

const testId = 'BreadcrumbNav';

test('it renders a BreadcrumbNav', async () => {
  const { findByTestId } = renderWithTheme(
    <BreadcrumbNav data-testid={testId} />
  );
  const breadcrumbNav = await findByTestId(testId);
  expect(breadcrumbNav).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <BreadcrumbNav data-testid={testId} className="custom-class-name" />
  );
  const breadcrumbNav = await findByTestId(testId);
  expect(breadcrumbNav.classList.contains('custom-class-name')).true;
});
