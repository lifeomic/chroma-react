import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
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
  expect(skeleton).toHaveAttribute('aria-busy', 'true');
  expect(hasClass(skeleton, 'ChromaSkeleton-root')).toBe(true);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton {...props} data-testid={testId} className="custom-class-name" />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'custom-class-name')).toBe(true);
});

test('it adds className for pulse animation', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} animation="pulse" />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'ChromaSkeleton-pulseAnimation')).toBe(true);
});

test('it adds className for shine animation', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} animation="shine" />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'ChromaSkeleton-shineAnimation')).toBe(true);
});

test('it adds className for no animation', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} animation="none" />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'ChromaSkeleton-noAnimation')).toBe(true);
});

test('it adds className for circle variant', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} variant="circle" />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'ChromaSkeleton-circle')).toBe(true);
});

test('it adds className for rectangle variant', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} variant="rectangle" />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'ChromaSkeleton-rectangle')).toBe(true);
});

test('it adds className for fullHeight', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} fullHeight width={props.width} />
  );

  const skeleton = await findByTestId(testId);
  expect(hasClass(skeleton, 'ChromaSkeleton-fullHeight')).toBe(true);
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
  expect(hasClass(skeleton, 'ChromaSkeleton-fullWidth')).toBe(true);
});

test('it sets defined width', async () => {
  const { findByTestId } = renderWithTheme(
    <Skeleton data-testid={testId} {...props} width={200} />
  );

  const skeleton = await findByTestId(testId);
  expect(skeleton).toHaveStyle('width: 200px');
});
