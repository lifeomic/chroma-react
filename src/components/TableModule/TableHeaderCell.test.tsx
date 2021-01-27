import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TableHeaderCell, TableHeaderCellProps } from './TableHeaderCell';

// To prevent console errors, we will test this component inside
// of a table
const RenderInsideTableRow: React.FC = ({ children }) => (
  <table>
    <thead>
      <tr>{children}</tr>
    </thead>
    <tbody></tbody>
  </table>
);

const testId = 'TableHeader';

const getBaseProps = (): TableHeaderCellProps => ({
  index: 0,
  headingsCount: 1,
  header: {
    label: 'header',
  },
  onClick: () => ({}),
  sortDirection: null,
});

test('it renders a TableHeaderCell', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell {...props} data-testid={testId} />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root?.nodeName).toEqual('TH');
  expect(root.getAttribute('role')).toEqual('columnheader');
  expect(root.getAttribute('aria-sort')).toBe('none');
});

test('it renders a TableHeaderCell with the header "content"', async () => {
  const props = getBaseProps();
  const header = {
    content: () => <span data-testid={testId}>custom content</span>,
  };

  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell {...props} header={header} />
    </RenderInsideTableRow>
  );
  const content = await findByTestId(testId);
  expect(content).toBeInTheDocument();
});

test('it sets the th "align" attribute', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        header={{ align: 'right', label: 'header' }}
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaTableHeaderCell-rootAlignRight');
});

test('it renders the last header with align="right"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        // fudge the props to test this
        index={1}
        headingsCount={2}
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaTableHeaderCell-rootAlignRight');
});

test('it renders the last header with the provided "align" override', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        // fudge the props to test this
        index={1}
        headingsCount={2}
        data-testid={testId}
        // Should expect this to be aligned left, despite being
        // the last header in the table
        header={{ ...props.header, align: 'left' }}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaTableHeaderCell-root');
  expect(root).not.toHaveClass('ChromaTableHeaderCell-rootAlignRight');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const header = {
    label: 'label',
    className: 'custom-class-name',
  };
  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell {...props} header={header} data-testid={testId} />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders the correct chevron direction when sortDirection is "asc" and isSorting', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        isSorting={true}
        sortDirection="asc"
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);

  const chevron = await findByRole('img', { hidden: true });
  expect(chevron).toHaveClass('ChromaTableHeaderCell-rotatedIcon');

  // For a11y, verify aria-sort
  expect(root.getAttribute('aria-sort')).toBe('ascending');
});

test('it renders the correct chevron direction when sortDirection is "desc" and isSorting', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        isSorting={true}
        sortDirection="desc"
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);

  const chevron = await findByRole('img', { hidden: true });
  expect(chevron).toHaveClass('ChromaTableHeaderCell-icon');

  // For a11y, verify aria-sort
  expect(root.getAttribute('aria-sort')).toBe('descending');
});

test('it calls the provided "onClick" only when the header "onSort" is specified', async () => {
  const props = getBaseProps();
  const handleClick = jest.fn();
  const header = {
    label: 'header',
    onSort: jest.fn(),
  };
  const sortDirection = 'asc';

  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        sortDirection={sortDirection}
        header={header}
        onClick={handleClick}
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );

  const root = await findByTestId(testId);
  fireEvent.click(root);
  expect(handleClick).toBeCalledTimes(1);
  expect(handleClick).toBeCalledWith({
    index: props.index,
    sortDirection,
    header,
  });
});

test('it *does not* call the provided "onClick" when the header "onSort" is not specified', async () => {
  const props = getBaseProps();
  const handleClick = jest.fn();
  const header = {
    label: 'header',
  };

  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        header={header}
        onClick={handleClick}
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );

  const root = await findByTestId(testId);
  fireEvent.click(root);
  expect(handleClick).toBeCalledTimes(0);
});

test('it applies none for aria-sort when isSorting is falsy', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell {...props} isSorting={false} data-testid={testId} />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);

  expect(root.getAttribute('aria-sort')).toBe('none');
});

// For accessibility audit
test('it renders td if there is no header content or label', async () => {
  const props = getBaseProps();
  const header = {
    label: '',
  };

  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        header={header}
        isSorting={false}
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root.tagName).toBe('TD');
});

test('it renders th if there is header content or label', async () => {
  const props = getBaseProps();
  const header = {
    label: 'header',
  };

  const { findByTestId } = renderWithTheme(
    <RenderInsideTableRow>
      <TableHeaderCell
        {...props}
        header={header}
        isSorting={false}
        data-testid={testId}
      />
    </RenderInsideTableRow>
  );
  const root = await findByTestId(testId);
  expect(root.tagName).toBe('TH');
});
