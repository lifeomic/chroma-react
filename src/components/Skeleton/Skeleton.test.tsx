import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Skeleton, SkeletonProps } from './index';

const testId = 'Skeleton';

const props: SkeletonProps = {
  height: 30,
  width: 30,
};

test('it renders a Skeleton', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton {...props} data-testid={testId} />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toBeInTheDocument();
  expect(skeleton).toHaveClass('ChromaSkeleton-root');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton {...props} data-testid={testId} className="custom-class-name" />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('custom-class-name');
});

test('it adds className for pulse animation', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} animation="pulse" />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-pulseAnimation');
});

test('it adds className for shine animation', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} animation="shine" />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-shineAnimation');
});

test('it adds className for no animation', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} animation="none" />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-noAnimation');
});

test('it adds className for circle variant', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} variant="circle" />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-circle');
});

test('it adds className for rectangle variant', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} variant="rectangle" />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-rectangle');
});

test('it adds className for fullHeight', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} fullHeight width={props.width} />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-fullHeight');
});

test('it sets defined height', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} height={100} />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveStyle('height: 100px');
});

test('it adds className for fullWidth', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} height={props.height} fullWidth />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveClass('ChromaSkeleton-fullWidth');
});

test('it sets defined width', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} width={200} />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveStyle('width: 200px');
});
