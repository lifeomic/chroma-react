import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SlideOver, SlideOverProps } from './index';

const testId = 'SlideOver';

const getBaseProps = (): SlideOverProps => ({
  isOpen: true,
});

test('it does not render if "isOpen" is false', () => {
  const { queryByTestId } = renderWithTheme(
    <SlideOver isOpen={false} data-testid={testId} />
  );

  const root = queryByTestId(testId);
  expect(root).not.toBeInTheDocument();
});

test('it renders a SlideOver', async () => {
  const { findByTestId } = renderWithTheme(
    <SlideOver {...getBaseProps()} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});
