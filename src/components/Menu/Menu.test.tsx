import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Menu, MenuGroupHeading, MenuItem } from './index';

const testId = 'Menu';
const anchorTestId = 'anchor';

test('it renders a hidden Menu', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem key={0} text="option1" />,
        <MenuItem key={1} text="option2" />,
      ]}
    />
  );

  const root = await findByTestId(testId);
  expect(root.hidden).toBeTruthy();
});

test('it renders a Menu after the anchor is clicked', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem key={0} text="option1" />,
        <MenuItem key={1} text="option2" />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const root = await findByTestId(testId);
  expect(root.hidden).toBeFalsy();
});

test('it renders the Menu title', async () => {
  const { findByTestId, findByText } = renderWithTheme(
    <Menu
      aria-label="Menu"
      title="Menu Title"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem key={0} text="option1" />,
        <MenuItem key={1} text="option2" />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const title = await findByText('Menu Title');
  expect(title).toBeTruthy();
  expect(title.textContent).toEqual('Menu Title');
});

test('it renders the Menu items', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem key={0} text="option1" />,
        <MenuItem key={1} text="option2" />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const root = await findByTestId(testId);
  const options = root.querySelectorAll('[role="menuitem"]');
  expect(options).toBeTruthy();
  expect(options.length).toEqual(2);
});

test('it calls the provided "onClick" of a MenuItem', async () => {
  const mockFn = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem
          key={0}
          icon={IconComponent}
          text="option1"
          onClick={mockFn}
          data-testid="option"
        />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  await act(async () => {
    const option = await findByTestId('option');
    fireEvent.click(option);
    expect(mockFn).toBeCalledTimes(1);
  });
});

test('it disables menu item', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem
          disabled={true}
          key={0}
          text="option1"
          data-testid="option"
        />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const option = await findByTestId('option');
  expect(option).toBeDisabled();
});

test('it spreads menu item props properly', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuItem
          className="menu-item-1"
          disabled={true}
          key={0}
          text="option1"
          data-testid="option"
        />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const option = await findByTestId('option');
  expect(option).toBeDisabled();
  expect(option).toHaveClass('menu-item-1');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      className="custom-class"
      data-testid={testId}
      items={[
        <MenuItem text="option1" key={0} />,
        <MenuItem text="option2" key={1} />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const root = await findByTestId(testId);
  expect(root.classList.contains('custom-class')).toBeTruthy();
});

test('it spreads anchorElement props properly', async () => {
  const { findByTestId } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={
        <button data-testid={anchorTestId} disabled>
          Open
        </button>
      }
      className="custom-class"
      data-testid={testId}
    />
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

it('renders a menu with group headings correctly', async () => {
  const { findByTestId, queryByText } = renderWithTheme(
    <Menu
      aria-label="Menu"
      anchorElement={<button data-testid={anchorTestId}>Open</button>}
      data-testid={testId}
      items={[
        <MenuGroupHeading>First Section</MenuGroupHeading>,
        <MenuItem key={0} text="option1" />,
        <MenuItem key={1} text="option2" />,
        // Testing non-string headers
        <MenuGroupHeading>
          <button>Test Button</button>
        </MenuGroupHeading>,
        <MenuItem key={0} text="option3" />,
        <MenuItem key={1} text="option4" />,
      ]}
    />
  );

  // Click anchor to open
  const button = await findByTestId(anchorTestId);
  fireEvent.click(button);

  const root = await findByTestId(testId);
  expect(root.hidden).toBeFalsy();

  expect(queryByText('First Section')).not.toBeNull();
  expect(queryByText('Test Button')).not.toBeNull();
});
