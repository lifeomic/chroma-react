import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PageLayout, PageLayoutProps } from './';

const getBaseProps = (): PageLayoutProps => ({
  title: 'Page Title',
});

test('it sets margin to none the header if a disclaimer is present', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <PageLayout {...props} disclaimer="foo" />
  );

  const header = await findByText(props.title!);
  expect(header?.parentElement).not.toHaveClass(
    'ChromaPageHeader-marginNormal'
  );
});

test('it renders headerActions content', async () => {
  const props = getBaseProps();
  const testId = 'header-actions';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props} headerActions={<div data-testid={testId} />} />
  );

  const actions = await findByTestId(testId);
  expect(actions).toBeInTheDocument();
});

test('it renders sidebar content', async () => {
  const props = getBaseProps();
  const testId = 'sidebar';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props} sidebar={<div data-testid={testId} />} />
  );

  const sidebar = await findByTestId(testId);
  expect(sidebar).toBeInTheDocument();
});

test('it renders children', async () => {
  const props = getBaseProps();
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props}>
      <div data-testid={testId} />
    </PageLayout>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

test('it renders disclaimerContent', async () => {
  const props = getBaseProps();
  const testId = 'disclaimer';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props} disclaimer={<div data-testid={testId} />} />
  );
  const disclaimer = await findByTestId(testId);
  expect(disclaimer).toBeInTheDocument();
});

test('it renders "headerCenter" with the provided "headerCenterClassName"', async () => {
  const props = getBaseProps();
  const testId = 'center';
  const { findByTestId } = renderWithTheme(
    <PageLayout
      {...props}
      headerCenterClassName="custom-class-name"
      headerCenter={<div data-testid={testId}>header center</div>}
    />
  );

  const root = await findByTestId(testId);
  expect(root?.parentElement).toHaveClass('custom-class-name');
});

test('it renders "tabs"', async () => {
  const props = getBaseProps();
  const testId = 'tabs';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props} tabs={<div data-testid={testId}>tabs</div>} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders "maxWidth={false}', async () => {
  const props = getBaseProps();
  const testId = 'noMaxWidth';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props} data-testid={testId} maxWidth={false} />
  );

  const root = await findByTestId(testId);
  expect(root).not.toHaveClass('ChromaPageLayout-maxWidth');
});

test('it renders a background when `applyBackgroundCover={true}`', async () => {
  const props = getBaseProps();
  const testId = 'applyBackgroundCover';
  const { findByTestId } = renderWithTheme(
    <PageLayout {...props} data-testid={testId} applyBackgroundCover={true} />
  );

  const root = await findByTestId(testId);
  expect(root?.firstElementChild).toHaveClass(
    'ChromaPageLayout-backgroundCover'
  );
});
