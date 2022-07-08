import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { List, ListGroupHeading, ListItem } from './index';

const testId = 'List';

test('it renders the List title', async () => {
  const { findByText } = renderWithTheme(
    <List
      aria-label="List"
      title="List Title"
      data-testid={testId}
      items={[
        <ListItem key={0} text="option1" />,
        <ListItem key={1} text="option2" />,
      ]}
    />
  );

  const title = await findByText('List Title');
  expect(title).toBeTruthy();
  expect(title.textContent).toEqual('List Title');
});

test('it renders the List items', async () => {
  const { findByTestId } = renderWithTheme(
    <List
      aria-label="List"
      data-testid={testId}
      items={[
        <ListItem key={0} text="option1" />,
        <ListItem key={1} text="option2" />,
      ]}
    />
  );

  const root = await findByTestId(testId);
  const options = root.querySelectorAll('li');
  expect(options).toBeTruthy();
  expect(options.length).toEqual(2);
});

test('it calls the provided "onClick" of a ListItem', async () => {
  const mockFn = jest.fn();
  const { findByTestId } = renderWithTheme(
    <List
      aria-label="List"
      data-testid={testId}
      items={[
        <ListItem
          key={0}
          icon={IconComponent}
          text="option1"
          onClick={mockFn}
          data-testid="option"
        />,
      ]}
    />
  );

  await act(async () => {
    const option = await findByTestId('option');
    fireEvent.click(option.firstChild as any);
    expect(mockFn).toBeCalledTimes(1);
  });
});

test('it disables List item', async () => {
  const { findByTestId } = renderWithTheme(
    <List
      aria-label="List"
      data-testid={testId}
      items={[
        <ListItem
          disabled={true}
          key={0}
          text="option1"
          data-testid="option"
          onClick={jest.fn()}
        />,
      ]}
    />
  );

  const option = await findByTestId('option');
  expect(option.firstChild).toBeDisabled();
});

test('it spreads List item props properly', async () => {
  const { findByTestId } = renderWithTheme(
    <List
      aria-label="List"
      data-testid={testId}
      items={[
        <ListItem
          className="List-item-1"
          disabled={true}
          key={0}
          text="option1"
          data-testid="option"
          onClick={jest.fn()}
        />,
      ]}
    />
  );

  const option = await findByTestId('option');
  expect(option.firstChild).toBeDisabled();
  expect(option.firstChild).toHaveClass('List-item-1');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <List
      aria-label="List"
      className="custom-class"
      data-testid={testId}
      items={[
        <ListItem text="option1" key={0} />,
        <ListItem text="option2" key={1} />,
      ]}
    />
  );

  const root = await findByTestId(testId);
  expect(root.classList.contains('custom-class')).toBeTruthy();
});

it('renders a List with group headings correctly', async () => {
  const { queryByText } = renderWithTheme(
    <List
      aria-label="List"
      data-testid={testId}
      items={[
        <ListGroupHeading key={0}>First Section</ListGroupHeading>,
        <ListItem key={1} text="option1" />,
        <ListItem key={2} text="option2" />,
        // Testing non-string headers
        <ListGroupHeading key={3}>
          <button>Test Button</button>
        </ListGroupHeading>,
        <ListItem key={4} text="option3" />,
        <ListItem key={5} text="option4" />,
      ]}
    />
  );

  expect(queryByText('First Section')).not.toBeNull();
  expect(queryByText('Test Button')).not.toBeNull();
});

test('renders a List item with secondary text', async () => {
  const { findByTestId } = renderWithTheme(
    <List
      aria-label="List"
      data-testid={testId}
      items={[
        <ListItem
          disabled={true}
          key={0}
          text="option1"
          secondaryText="secondary text"
          data-testid="option"
        />,
      ]}
    />
  );

  const option = await findByTestId('option');
  expect(option).toHaveTextContent('secondary text');
});
