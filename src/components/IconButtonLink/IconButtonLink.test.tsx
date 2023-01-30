import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { hasClass } from '../../testUtils/hasClass';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconButtonLink, IconButtonLinkProps } from './index';

const testId = 'IconButtonLink';

const getBaseProps = (): IconButtonLinkProps => ({
  'aria-label': 'dummy',
  icon: IconComponent,
  to: '/foo',
});

const RenderContainer: React.FC<any> = ({ children }) => (
  <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
);

test('it renders an IconButtonLink', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('href')).toEqual('/foo');
});

test('it renders an externally linked IconButtonLink', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink
        {...props}
        data-testid={testId}
        to="https://www.tonyward.dev"
      />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('target')).toEqual('_blank');
  expect(root.getAttribute('rel')).toEqual('noopener noreferrer');
});

test('it renders an externally linked IconButtonLink using the "target" provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink
        {...props}
        data-testid={testId}
        to="https://www.tonyward.dev"
        target="_self"
      />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('target')).toEqual('_self');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink
        {...props}
        data-testid={testId}
        className="custom-class"
      />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

test('it applies the provided "rel"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} rel="alternate" />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('rel')).toEqual('alternate');
});

test('it renders with `size={0}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} size={0} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-size0')).toBe(true);
});

test('it renders with `color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} color="inverse" />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-inverse')).toBe(true);
});

test('it renders with `color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} color="negative" />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-negative')).toBe(true);
});

test('it renders with `color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} color="positive" />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-positive')).toBe(true);
});

test('it allows combining the "padding" props', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink
        {...props}
        data-testid={testId}
        paddingTop={0}
        paddingBottom={1}
        paddingLeft={2}
        paddingRight={1}
      />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingTop0')).toBe(true);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingBottom1')).toBe(true);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingLeft2')).toBe(true);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingRight1')).toBe(true);
});

// #region paddingTop

test('it renders "paddingTop={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingTop={0} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingTop0')).toBe(true);
});

test('it renders "paddingTop={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingTop={1} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingTop1')).toBe(true);
});

test('it renders "paddingTop={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingTop={2} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingTop2')).toBe(true);
});

test('it renders "paddingTop={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingTop={3} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingTop3')).toBe(true);
});

// #endregion

// #region paddingBottom

test('it renders "paddingBottom={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingBottom={0} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingBottom0')).toBe(true);
});

test('it renders "paddingBottom={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingBottom={1} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingBottom1')).toBe(true);
});

test('it renders "paddingBottom={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingBottom={2} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingBottom2')).toBe(true);
});

test('it renders "paddingBottom={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingBottom={3} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingBottom3')).toBe(true);
});

// #endregion

// #region paddingLeft

test('it renders "paddingLeft={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingLeft={0} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingLeft0')).toBe(true);
});

test('it renders "paddingLeft={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingLeft={1} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingLeft1')).toBe(true);
});

test('it renders "paddingLeft={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingLeft={2} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingLeft2')).toBe(true);
});

test('it renders "paddingLeft={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingLeft={3} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingLeft3')).toBe(true);
});

// #endregion

// #region paddingRight

test('it renders "paddingRight={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingRight={0} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingRight0')).toBe(true);
});

test('it renders "paddingRight={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingRight={1} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingRight1')).toBe(true);
});

test('it renders "paddingRight={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingRight={2} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingRight2')).toBe(true);
});

test('it renders "paddingRight={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <IconButtonLink {...props} data-testid={testId} paddingRight={3} />
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconButtonLink-paddingRight3')).toBe(true);
});

// #endregion
