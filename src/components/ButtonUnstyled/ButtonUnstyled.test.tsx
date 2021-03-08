import * as React from 'react';
import { ButtonUnstyled, ButtonUnstyledProps } from './index';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';

const testId = 'ButtonUnstyled';

const getBaseProps = (): ButtonUnstyledProps => ({});

test('it renders an ButtonUnstyled', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonUnstyled {...props} data-testid={testId}>
      Button
    </ButtonUnstyled>
  );
  const button = await findByTestId(testId);
  expect(button).toBeInTheDocument();
  expect(button.getAttribute('type')).toEqual('button');
  expect(button.getAttribute('tabIndex')).toEqual('0');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonUnstyled
      {...props}
      data-testid={testId}
      className="custom-class-name"
    >
      Button
    </ButtonUnstyled>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('custom-class-name');
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonUnstyled {...props} data-testid={testId} fullWidth>
      Button
    </ButtonUnstyled>
  );
  const button = await findByTestId(testId);
  expect(button).toHaveClass('ChromaButtonUnstyled-fullWidth');
});

test('it renders a disabled button', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonUnstyled {...props} data-testid={testId} disabled>
      Button
    </ButtonUnstyled>
  );
  const button = await findByTestId(testId);
  expect(button).toBeDisabled();
  expect(button.getAttribute('tabIndex')).toEqual('-1');
});

test('it calls onClick', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonUnstyled {...props} data-testid={testId} onClick={mockFn}>
      Button
    </ButtonUnstyled>
  );
  const button = await findByTestId(testId);
  fireEvent.click(button);
  expect(mockFn).toHaveBeenCalled();
});
