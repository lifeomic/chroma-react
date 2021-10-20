import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Slider } from './';

const testId = 'Slider';

const props = {
  onChange: jest.fn(),
};

(window as any).ResizeObserver = jest.fn().mockImplementation(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

test('it renders a Slider', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider data-testid={testId} {...props} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaSlider-root');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider className="custom-class-name" data-testid={testId} {...props} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders label when provided', async () => {
  const { findByText } = renderWithTheme(
    <Slider data-testid={testId} label="label-text" {...props} />
  );

  const label = await findByText(/label-text/);
  expect(label).toBeInTheDocument();
});

test('it renders aria-label when provided', async () => {
  const { findByLabelText } = renderWithTheme(
    <Slider aria-label="aria-label-text" data-testid={testId} {...props} />
  );

  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

test('it renders label and value when label and showValue are provided', async () => {
  const { findByText } = renderWithTheme(
    <Slider
      label="label-text"
      data-testid={testId}
      showValue
      value={[20]}
      {...props}
    />
  );

  const label = await findByText(/label-text/);
  expect(label).toBeInTheDocument();

  const value = await findByText('20');
  expect(value).toBeInTheDocument();
});

test('it renders value when showValue is provided', async () => {
  const { findByText } = renderWithTheme(
    <Slider data-testid={testId} showValue value={[20]} {...props} />
  );

  const value = await findByText('20');
  expect(value).toBeInTheDocument();
});

test('it does not render value when showValue is not provided', () => {
  const { queryByText } = renderWithTheme(
    <Slider data-testid={testId} value={[20]} {...props} />
  );

  const value = queryByText('20');
  expect(value).not.toBeInTheDocument();
});

test('it calls formatValue if showValue and formatValue are provided', async () => {
  const formatValue = jest.fn();
  renderWithTheme(
    <Slider
      data-testid={testId}
      formatValue={formatValue}
      showValue
      value={[20]}
      {...props}
    />
  );

  expect(formatValue).toHaveBeenCalledTimes(1);
  expect(formatValue).toHaveBeenCalledWith([20]);
});

test('it does not call formatValue if showValue is not provided', async () => {
  const formatValue = jest.fn();
  renderWithTheme(
    <Slider
      data-testid={testId}
      formatValue={formatValue}
      value={[20]}
      {...props}
    />
  );

  expect(formatValue).not.toHaveBeenCalledTimes(1);
});

test('it renders the formatted value if showValue and formatValue are provided', async () => {
  const formatValue = (value: number[] | undefined) => `${value?.[0]} cm`;
  const { findByText } = renderWithTheme(
    <Slider
      data-testid={testId}
      formatValue={formatValue}
      showValue
      value={[20]}
      {...props}
    />
  );

  const formattedValue = await findByText('20 cm');
  expect(formattedValue).toBeInTheDocument();
});

test('it renders a single thumb if "type === point"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <Slider data-testid={testId} type="point" {...props} />
  );

  const thumbs = await findAllByTestId('ChromaSlider-thumb');
  expect(thumbs).toHaveLength(1);
});

test('it renders two thumbs if "type === range"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <Slider data-testid={testId} type="range" {...props} />
  );

  const thumbs = await findAllByTestId('ChromaSlider-thumb');
  expect(thumbs).toHaveLength(2);
});

test('it renders the provided help message', async () => {
  const { findByText } = renderWithTheme(
    <Slider data-testid={testId} helpMessage="Helpful text" {...props} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state Slider', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider data-testid={testId} hasError {...props} />
  );

  const root = await findByTestId(testId);
  expect(root.children[1].firstChild).toHaveClass('ChromaSlider-thumbError');
});

test('it renders an error-state Slider with the provided errorMessage', async () => {
  const { findByText } = renderWithTheme(
    <Slider
      data-testid={testId}
      errorMessage="Slider error message"
      hasError
      {...props}
    />
  );

  const error = await findByText(/Slider error message/);
  expect(error).toBeInTheDocument();
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider data-testid={testId} name="unique-name" {...props} />
  );

  const root = await findByTestId(testId);
  expect(root.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider
      data-testid={testId}
      errorMessage="Error!"
      hasError
      name="unique-name"
      {...props}
    />
  );

  const root = await findByTestId(testId);
  expect(root.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-name'
  );
});

test('it applies aria-describedby for helpMessage', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider
      data-testid={testId}
      helpMessage="Help Message"
      name="unique-name"
      {...props}
    />
  );

  const root = await findByTestId(testId);
  expect(root.getAttribute('aria-describedby')).toEqual('help-for-unique-name');
});
