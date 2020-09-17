import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Tooltip } from './index';

const testId = 'Tooltip';

test('it renders a hidden Tooltip', async () => {
  const { findByTestId } = renderWithTheme(
    <Tooltip title="foo bar" data-testid={testId}>
      <button>test</button>
    </Tooltip>
  );

  const root = await findByTestId(testId);
  expect(root.hidden).toBeTruthy();
});

// NOTE: We have to test it this way with "defaultVisible" because we don't
// have a great way to trigger the mouse events.  The react testing library
// mouse*() functions don't trigger the visibility as we'd expect.
test('it renders a visible Tooltip', async () => {
  const { findByTestId, findByText } = renderWithTheme(
    <Tooltip title="foo bar" data-testid={testId} defaultVisible>
      <button>test</button>
    </Tooltip>
  );

  const root = await findByTestId(testId);
  expect(root.hidden).toBeFalsy();

  const title = await findByText('foo bar');
  expect(title).toBeTruthy();
  expect(title.textContent).toEqual('foo bar');
});

test('it applies the provided className', async () => {
  const className = 'custom-class';

  const { findByTestId } = renderWithTheme(
    <Tooltip
      title="foo bar"
      data-testid={testId}
      className={className}
      defaultVisible
    >
      <button>test</button>
    </Tooltip>
  );

  const root = await findByTestId(testId);
  expect(root.classList.contains(className)).toBeTruthy();
});
