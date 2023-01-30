import { fireEvent, act } from '@testing-library/react';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Popover, PopoverRenderProps } from './index';

const testId = 'Popover';
const anchorTestId = 'anchor';

test('it renders a hidden Popover', async () => {
  const { findByTestId } = renderWithTheme(
    <Popover
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      aria-label="Popover"
      data-testid={testId}
    >
      <button>Content</button>
    </Popover>
  );

  const root = await findByTestId(testId);
  expect(root.hidden).toBeTruthy();
});

test('it renders a Popover after the anchor is clicked', async () => {
  const { findByTestId } = renderWithTheme(
    <Popover
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      aria-label="Popover"
      data-testid={testId}
    >
      <button>Content</button>
    </Popover>
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const root = await findByTestId(testId);
  expect(root.hidden).toBeFalsy();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Popover
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      aria-label="Popover"
      className="custom-class-name"
      data-testid={testId}
    >
      <button>Content</button>
    </Popover>
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it renders the provided "title"', async () => {
  const { findByTestId } = renderWithTheme(
    <Popover
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      aria-label="Popover"
      title="Title"
      data-testid={testId}
    />
  );

  const root = await findByTestId(testId);
  expect(root.textContent).toEqual('Title');
});

test('it can use render props', async () => {
  const closeTestId = 'close';
  const { findByTestId } = renderWithTheme(
    <Popover
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      aria-label="render-props-test"
      title="Title"
      data-testid={testId}
    >
      {({ popover }: PopoverRenderProps) => (
        <button onClick={() => popover.hide()} data-testid={closeTestId}>
          Close
        </button>
      )}
    </Popover>
  );

  const popover = await findByTestId(testId);

  await act(async () => {
    // Click anchor to open
    const button = await findByTestId(anchorTestId);
    fireEvent.click(button);

    expect(popover).not.toHaveAttribute('aria-hidden');

    // Close the popover using render props
    const closeButton = await findByTestId(closeTestId);
    fireEvent.click(closeButton);

    expect(popover).toHaveAttribute('aria-hidden', 'true');
  });
});

test('it spreads anchorElement props properly', async () => {
  const { findByTestId } = renderWithTheme(
    <Popover
      anchorElement={
        <button data-testid={anchorTestId} disabled>
          Open
        </button>
      }
      aria-label="Popover"
    >
      <button>Content</button>
    </Popover>
  );

  const button = await findByTestId(anchorTestId);
  expect(button.getAttributeNames()).toEqual([
    'data-testid',
    'disabled',
    'style',
    'aria-disabled',
    'type',
    'aria-expanded',
    'aria-controls',
    'aria-haspopup',
  ]);
});
