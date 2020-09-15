import { act, RenderResult } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { LayoutManager, LayoutManagerProps } from './LayoutManager';
import {
  LayoutManagerContextValue,
  useLayoutManager,
} from './LayoutManagerContext';

const TestChild: React.FC<{
  callback: (ctx: LayoutManagerContextValue) => void;
}> = ({ callback }) => {
  const ctx = useLayoutManager();
  callback(ctx);
  return null;
};

interface ContextRef {
  current: LayoutManagerContextValue | null;
}

const renderAndReturnContext = (
  props?: LayoutManagerProps
): [RenderResult, ContextRef] => {
  const ref: ContextRef = { current: null };
  const setRef = (ctx: LayoutManagerContextValue) => (ref.current = ctx);
  const result = renderWithTheme(
    <LayoutManager {...props}>
      <TestChild callback={setRef} />
    </LayoutManager>
  );

  return [result, ref];
};

test('renders children in main area', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <LayoutManager>
      <div data-testid={testId} />
    </LayoutManager>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

test('renders sidebar in sidebar area', async () => {
  const testId = 'sidebar';
  const { findByTestId } = renderWithTheme(
    <LayoutManager sidebar={<div data-testid={testId} />} />
  );

  const sidebar = await findByTestId(testId);
  expect(sidebar).toBeInTheDocument();
});

test('renders header in header area', async () => {
  const testId = 'header';
  const { findByTestId } = renderWithTheme(
    <LayoutManager header={<div data-testid={testId} />} />
  );

  const header = await findByTestId(testId);
  expect(header).toBeInTheDocument();
});

test('renders sidebar collapsed', async () => {
  const testId = 'sidebar';
  const { findByTestId } = renderWithTheme(
    <LayoutManager
      initialIsSidebarCollapsed
      sidebar={<div data-testid={testId} />}
    />
  );

  const sidebar = await findByTestId(testId);
  expect(sidebar?.parentElement).toHaveClass(
    'ChromaLayoutManager-sidebarCollapsed'
  );
});

test('toggleSidebarCollapsed toggles isSidebarCollapsed value', () => {
  const [, ctx] = renderAndReturnContext();
  act(() => {
    ctx.current!.toggleSidebarCollapsed();
  });
  expect(ctx.current!.isSidebarCollapsed).toBe(true);
  act(() => {
    ctx.current!.toggleSidebarCollapsed();
  });
  expect(ctx.current!.isSidebarCollapsed).toBe(false);
});

test('toggleSidebarCollapsed does not toggle isSidebarCollapsed value if isSidebarCollapseDisabled is true', () => {
  const [, ctx] = renderAndReturnContext({ isSidebarCollapseDisabled: true });
  act(() => {
    ctx.current!.toggleSidebarCollapsed();
  });
  expect(ctx.current!.isSidebarCollapsed).toBe(false);
});
