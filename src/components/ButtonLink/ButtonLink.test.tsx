import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  IconComponent,
  testId as iconComponentTestId,
} from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { ButtonLink, ButtonLinkProps } from './index';

const testId = 'ButtonLink';

const getBaseProps = (): ButtonLinkProps => ({
  to: '/foo',
});

const RenderContainer: React.FC<any> = ({ children }) => (
  <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
);

test('it renders a ButtonLink', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId}>
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('href')).toEqual('/foo');
});

test('it renders an externally linked ButtonLink', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} to="https://www.lifeomic.com">
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('target')).toEqual('_blank');
  expect(root.getAttribute('rel')).toEqual('noopener noreferrer');
});

test('it renders an externally linked ButtonLink using the "target" provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        to="https://www.lifeomic.com"
        target="_self"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('target')).toEqual('_self');
});

test('it applies the provided "rel"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} rel="alternate">
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('rel')).toEqual('alternate');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} className="custom-class">
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class');
});

test('it renders an icon with the "icon" class name', () => {
  const props = getBaseProps();
  const { getByRole } = renderWithTheme(
    <RenderContainer>
      <ButtonLink icon={IconComponent} {...props}>
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const icon = getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveClass('ChromaButtonLink-icon');
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} fullWidth>
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonLink-fullWidth');
});

test('it renders with `variant="outlined"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} variant="outlined">
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonLink-outlined');
});

test('it renders with `variant="text"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} variant="text">
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonLink-text');
});

// #region inverse tests
test('it renders with `variant="contained" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="contained"
        color="inverse"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonLink-containedInverse');
});

test('it renders with `variant="outlined" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="outlined"
        color="inverse"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonLink-outlinedInverse');
});

test('it renders with `variant="text" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="text"
        color="inverse"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonLink-textInverse');
});
// #endregion

test('it renders a disabled link when disabled', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} disabled={true} data-testid={testId}>
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );

  const root = await findByTestId(testId);

  expect(root.getAttribute('href')).toBe(null);
  expect(root.getAttribute('aria-disabled')).toBe('true');
  expect(root.getAttribute('role')).toBe('button');
  expect(root).toHaveClass('ChromaButtonLink-disabledContained');
});

test('it renders a disabled inverse link when disabled', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        disabled={true}
        color="inverse"
        data-testid={testId}
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );

  const root = await findByTestId(testId);

  expect(root.getAttribute('href')).toBe(null);
  expect(root.getAttribute('aria-disabled')).toBe('true');
  expect(root.getAttribute('role')).toBe('button');
  expect(root).toHaveClass('ChromaButtonLink-containedInverse');
});

test('it renders a trailing icon', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink {...props} data-testid={testId} trailingIcon={IconComponent}>
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const trailingIcon = await findByTestId(iconComponentTestId);
  expect(trailingIcon).toBeInTheDocument();
  expect(trailingIcon).toHaveClass('ChromaButtonLink-trailingIcon');
});
