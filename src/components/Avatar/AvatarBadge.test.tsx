import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { AvatarBadge, AvatarBadgeProps } from '../Avatar';
import { AvatarSizeContext } from './AvatarSizeContext';

const testId = 'AvatarBadge';

const getBaseProps = (): AvatarBadgeProps => ({
  isVisible: true,
});

test('it renders an AvatarBadge', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <AvatarBadge data-testid={testId} {...props} />
  );
  const badge = await findByTestId(testId);
  expect(badge).toBeInTheDocument();
});

test('it has a role of "status"', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <AvatarBadge data-testid={testId} {...props} />
  );
  const badge = await findByRole('status');
  expect(badge).toBeInTheDocument();
});

test('it sets a default aria-label', async () => {
  const props = getBaseProps();
  const { findByLabelText } = renderWithTheme(
    <AvatarBadge data-testid={testId} {...props} />
  );
  const badge = await findByLabelText('notifications available');
  expect(badge).toBeInTheDocument();
});

test('it uses the provided count in the aria-label', async () => {
  const props = getBaseProps();
  const { findByLabelText } = renderWithTheme(
    <AvatarBadge data-testid={testId} {...props} count={4} />
  );
  const badge = await findByLabelText('4 notifications available');
  expect(badge).toBeInTheDocument();
});

test('it does not render if count is falsy', () => {
  const { queryByTestId } = renderWithTheme(
    <AvatarBadge data-testid={testId} />
  );
  const badge = queryByTestId(testId);
  expect(badge).toBeFalsy();
});

test('it renders an AvatarBadge with count', async () => {
  const { findByTestId } = renderWithTheme(
    <AvatarBadge data-testid={testId} count={8} />
  );
  const badge = await findByTestId(testId);
  expect(badge).toHaveTextContent('8');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <AvatarBadge
      data-testid={testId}
      {...props}
      className="custom-class-name"
    />
  );

  const badge = await findByTestId(testId);
  expect(badge).toHaveClass('custom-class-name');
});

test('it does not render count for `size={0}`', async () => {
  const { findByTestId } = renderWithTheme(
    <AvatarSizeContext.Provider value={{ size: 0 }}>
      <AvatarBadge data-testid={testId} count={8} />
    </AvatarSizeContext.Provider>
  );

  const badge = await findByTestId(testId);
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveTextContent('');
  expect(badge).toHaveClass('ChromaAvatarBadge-size0');
});

test('it renders `size={1}`', async () => {
  const { findByTestId } = renderWithTheme(
    <AvatarSizeContext.Provider value={{ size: 1 }}>
      <AvatarBadge data-testid={testId} count={8} />
    </AvatarSizeContext.Provider>
  );
  const badge = await findByTestId(testId);
  expect(badge).toHaveClass('ChromaAvatarBadge-size1');
});

test('it renders `size={2}`', async () => {
  const { findByTestId } = renderWithTheme(
    <AvatarSizeContext.Provider value={{ size: 2 }}>
      <AvatarBadge data-testid={testId} count={8} />
    </AvatarSizeContext.Provider>
  );
  const badge = await findByTestId(testId);
  expect(badge).toHaveClass('ChromaAvatarBadge-size2');
});
