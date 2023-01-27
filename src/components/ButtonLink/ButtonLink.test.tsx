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
  expect(root.classList.contains('custom-class'));
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
  expect(icon.classList.contains('ChromaButtonLink-icon'));
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
  expect(root.classList.contains('ChromaButtonLink-fullWidth'));
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
  expect(root.classList.contains('ChromaButtonLink-outlined'));
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
  expect(root.classList.contains('ChromaButtonLink-text'));
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
  expect(root.classList.contains('ChromaButtonLink-containedInverse'));
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
  expect(root.classList.contains('ChromaButtonLink-outlinedInverse'));
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
  expect(root.classList.contains('ChromaButtonLink-textInverse'));
});
// #endregion

// #region negative tests
test('it renders with `variant="contained" color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="contained"
        color="negative"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonLink-containedNegative'));
});

test('it renders with `variant="outlined" color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="outlined"
        color="negative"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonLink-outlinedNegative'));
});

test('it renders with `variant="text" color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="text"
        color="negative"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonLink-textNegative'));
});
// #endregion

// #region positive tests
test('it renders with `variant="contained" color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="contained"
        color="positive"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonLink-containedPositive'));
});

test('it renders with `variant="outlined" color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="outlined"
        color="positive"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonLink-outlinedPositive'));
});

test('it renders with `variant="text" color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        data-testid={testId}
        variant="text"
        color="positive"
      >
        ButtonLink
      </ButtonLink>
    </RenderContainer>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonLink-textPositive'));
});
// #endregion

// #region disabled tests
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
  expect(root.classList.contains('ChromaButtonLink-disabledContained'));
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
  expect(root.classList.contains('ChromaButtonLink-containedInverse'));
});

test('it renders a disabled negative link when disabled', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        disabled={true}
        color="negative"
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
  expect(root.classList.contains('ChromaButtonLink-containedNegative'));
});

test('it renders a disabled positive link when disabled', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderContainer>
      <ButtonLink
        {...props}
        disabled={true}
        color="positive"
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
  expect(root.classList.contains('ChromaButtonLink-containedPositive'));
});
// #endregion

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
  expect(trailingIcon.classList.contains('ChromaButtonLink-trailingIcon'));
});
