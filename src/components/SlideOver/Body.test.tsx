import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Body } from './index';

const testId = 'Body';

test('it renders a Body', async () => {
  const { findByTestId } = renderWithTheme(<Body data-testid={testId} />);

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Body data-testid={testId} className="custom-class" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

test('it renders the component using the provided "as"', async () => {
  const { findByTestId } = renderWithTheme(
    <Body data-testid={testId} as="section" />
  );

  const root = await findByTestId(testId);
  expect(root.nodeName).toEqual('SECTION');
});
