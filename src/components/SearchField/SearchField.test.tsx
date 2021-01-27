import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SearchField, SearchFieldProps } from './index';

const testId = 'SearchField';

const getBaseProps = (): SearchFieldProps => ({
  id: 'id',
});

test('it renders a SearchField', async () => {
  const props = getBaseProps();
  const { findByTestId, findByLabelText } = renderWithTheme(
    <SearchField {...props} data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('type')).toEqual('search');

  const searchButton = await findByLabelText(/Search/);
  expect(searchButton).toBeInTheDocument();
  expect(searchButton.getAttribute('tabIndex')).toEqual('-1');
  expect(searchButton).toHaveClass('ChromaSearchField-buttonHeight1');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField
      {...props}
      data-testid={testId}
      className="custom-class-name"
    />
  );
  const root = await findByTestId(testId);
  expect(root?.parentElement).toHaveClass('custom-class-name');
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SearchField {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it uses the name to generate a unique id', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField
      {...props}
      id={undefined}
      name="unique-name"
      data-testid={testId}
    />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('id')).toEqual('unique-name');
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField {...props} data-testid={testId} id="unique-id" />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for helpMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField
      {...props}
      data-testid={testId}
      helpMessage="Help Message"
      id="unique-id"
    />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('aria-describedby')).toEqual('help-for-unique-id');
});

test('it renders an inverse color SearchField', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <SearchField
      {...props}
      color="inverse"
      helpMessage="inverse help text"
      data-testid={testId}
    />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaSearchField-inputInverse');

  const svg = await findByRole('img', { hidden: true });
  expect(svg).toBeInTheDocument();
  expect(svg).toHaveClass('ChromaSearchField-buttonSvgInverse');
});

test('it renders a "height={0}" SearchField', async () => {
  const props = getBaseProps();
  const { findByLabelText } = renderWithTheme(
    <SearchField {...props} height={0} data-testid={testId} />
  );
  const searchButton = await findByLabelText(/Search/);
  expect(searchButton).toHaveClass('ChromaSearchField-buttonHeight0');
});

test('it calls the provided "onSearch" upon ENTER press, returning the entered text', async () => {
  const value = 'chroma';
  const mockFn = jest.fn();

  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField {...props} onSearch={mockFn} data-testid={testId} />
  );

  const input = await findByTestId(testId);

  fireEvent.change(input, { target: { value } });
  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toBeCalledWith(value);
});

test('it clears the input by default upon ENTER press', async () => {
  const mockFn = jest.fn();

  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField {...props} onSearch={mockFn} data-testid={testId} />
  );

  const input: any = await findByTestId(testId);

  fireEvent.change(input, { target: { value: 'should clear this' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

  expect(input.value).toBe('');
});

test('it does not clear the input upon ENTER press if disableClearOnSearch', async () => {
  const value = 'chroma';
  const mockFn = jest.fn();

  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SearchField
      {...props}
      onSearch={mockFn}
      data-testid={testId}
      disableClearOnSearch
    />
  );

  const input: any = await findByTestId(testId);

  fireEvent.change(input, { target: { value } });
  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

  expect(input.value).toBe(value);
});

test('it displays the clear button after text has been entered', async () => {
  const props = getBaseProps();
  const { findByTestId, findByLabelText } = renderWithTheme(
    <SearchField {...props} data-testid={testId} />
  );

  const input: any = await findByTestId(testId);

  fireEvent.change(input, { target: { value: 'some text here' } });

  const button = await findByLabelText(/Clear input/);
  expect(button).toBeInTheDocument();
});

test('it clears the search value after clicking the clear button with disableClearOnSearch', async () => {
  const props = getBaseProps();
  const { findByTestId, findByLabelText } = renderWithTheme(
    <SearchField {...props} data-testid={testId} disableClearOnSearch />
  );

  const input: any = await findByTestId(testId);
  fireEvent.change(input, { target: { value: 'this should be cleared...' } });

  const button = await findByLabelText(/Clear input/);
  fireEvent.click(button);

  expect(input.value).toBe('');
});

test('it calls the provided onClear and onChange after clicking the clear button', async () => {
  const onClear = jest.fn();
  const onChange = jest.fn((event) => event.target.value);
  const props = getBaseProps();
  const { findByTestId, findByLabelText } = renderWithTheme(
    <SearchField
      {...props}
      data-testid={testId}
      onClear={onClear}
      onChange={onChange}
    />
  );

  const input: any = await findByTestId(testId);
  fireEvent.change(input, { target: { value: 'this should be cleared...' } });

  const button = await findByLabelText(/Clear input/);
  fireEvent.click(button);

  expect(onClear).toBeCalledTimes(1);

  expect(onChange).toHaveNthReturnedWith(1, 'this should be cleared...');
  expect(onChange).toHaveNthReturnedWith(2, '');
});

test('it calls the provided onClear and onChange after clicking the clear button with disableClearOnSearch', async () => {
  const onClear = jest.fn();
  const onChange = jest.fn((event) => event.target.value);
  const props = getBaseProps();
  const { findByTestId, findByLabelText } = renderWithTheme(
    <SearchField
      {...props}
      data-testid={testId}
      onClear={onClear}
      onChange={onChange}
      disableClearOnSearch
    />
  );

  const input: any = await findByTestId(testId);
  fireEvent.change(input, { target: { value: 'this should be cleared...' } });

  const button = await findByLabelText(/Clear input/);
  fireEvent.click(button);

  expect(onClear).toBeCalledTimes(1);

  expect(onChange).toHaveNthReturnedWith(1, 'this should be cleared...');
  expect(onChange).toHaveNthReturnedWith(2, '');
});
