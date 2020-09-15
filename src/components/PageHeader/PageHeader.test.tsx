import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PageHeader, PageHeaderProps } from './';

const testId = 'PageHeader';

const getBaseProps = (): PageHeaderProps => ({
  title: 'Page Title',
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <PageHeader {...props} data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPageHeader-root');
});

test('margin class is not applied to root element if margin is set to none', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <PageHeader {...props} data-testid={testId} margin="none" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPageHeader-root');
  expect(root).not.toHaveClass('ChromaPageHeader-marginNormal');
});

test('marginNormal class is applied to root element if margin is set to normal', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <PageHeader {...props} data-testid={testId} margin="normal" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPageHeader-marginNormal');
});

test('it renders actions content', async () => {
  const props = getBaseProps();
  const testId = 'actions';
  const { findByTestId } = renderWithTheme(
    <PageHeader {...props} actions={<div data-testid={testId} />} />
  );

  const actions = await findByTestId(testId);
  expect(actions).toBeInTheDocument();
});

test('it renders "center" content', async () => {
  const props = getBaseProps();
  const testId = 'center';
  const { findByTestId } = renderWithTheme(
    <PageHeader {...props} center={<div data-testid={testId} />} />
  );

  const center = await findByTestId(testId);
  expect(center).toBeInTheDocument();
});

test('it renders "center" with the provided "centerClassName"', async () => {
  const props = getBaseProps();
  const testId = 'page-header';
  const { findByTestId } = renderWithTheme(
    <PageHeader
      {...props}
      centerClassName="custom-class-name"
      center={<div data-testid={testId}>centered center</div>}
    />
  );

  const root = await findByTestId(testId);
  expect(root?.parentElement).toHaveClass('custom-class-name');
});

test('it renders "left" with the provided "leftClassName"', async () => {
  const props = getBaseProps();
  const testId = 'page-header';
  const { findByTestId } = renderWithTheme(
    <PageHeader
      {...props}
      leftClassName="custom-class-name"
      left={<div data-testid={testId}>left</div>}
    />
  );

  const root = await findByTestId(testId);
  expect(root?.parentElement).toHaveClass('custom-class-name');
});

test('it applies `align="center"`', async () => {
  const props = getBaseProps();
  const testId = 'page-header';
  const { findByTestId } = renderWithTheme(
    <PageHeader {...props} data-testid={testId} align="center" />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPageHeader-alignCenter');
});
