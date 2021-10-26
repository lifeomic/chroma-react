import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Slider, testIds } from './';

const props = {
  onValueChange: jest.fn(),
  type: 'point' as const,
};

(window as any).ResizeObserver = jest.fn().mockImplementation(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

test('it renders a Slider', async () => {
  const { findByTestId } = renderWithTheme(<Slider {...props} />);
  const slider = await findByTestId(testIds.slider);
  expect(slider).toHaveClass('ChromaSlider-slider');
});

test('it applies the provided className to the root', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider className="custom-class-name" {...props} />
  );
  const root = await findByTestId(testIds.root);
  expect(root).toHaveClass('custom-class-name');
});

test('it renders label when provided', async () => {
  const { findByText } = renderWithTheme(
    <Slider label="label-text" {...props} />
  );

  const label = await findByText(/label-text/);
  expect(label).toBeInTheDocument();
});

test('it applies labelBottom className to label when labelPlacement is bottom', async () => {
  const { findByText } = renderWithTheme(
    <Slider label="label-text" labelPlacement="bottom" {...props} />
  );

  const label = await findByText(/label-text/);
  expect(label).toHaveClass('ChromaSlider-labelBottom');
});

test('it renders aria-label when provided', async () => {
  const { findByLabelText } = renderWithTheme(
    <Slider aria-label="aria-label-text" {...props} />
  );

  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

test('it renders label and value when label and showValue are provided', async () => {
  const { findByText } = renderWithTheme(
    <Slider label="label-text" showValue value={20} {...props} />
  );

  const label = await findByText(/label-text/);
  expect(label).toBeInTheDocument();

  const value = await findByText('20');
  expect(value).toBeInTheDocument();
});

test('it renders the value when showValue is provided', async () => {
  const { findByText } = renderWithTheme(
    <Slider showValue value={20} {...props} />
  );

  const value = await findByText('20');
  expect(value).toBeInTheDocument();
});

test('it does not render the value when showValue is not provided', () => {
  const { queryByText } = renderWithTheme(<Slider value={20} {...props} />);

  const value = queryByText('20');
  expect(value).not.toBeInTheDocument();
});

test('it renders the formatted value if formatValue is provided', async () => {
  const formatValue = (value: number | undefined) => `${value} cm`;
  const { findByText } = renderWithTheme(
    <Slider formatValue={formatValue} value={20} {...props} />
  );

  const formattedValue = await findByText('20 cm');
  expect(formattedValue).toBeInTheDocument();
});

test('it does not render the value if formatValue is not provided', () => {
  const { queryByText } = renderWithTheme(
    <Slider formatValue={undefined} value={20} {...props} />
  );

  const formattedValue = queryByText('20');
  expect(formattedValue).not.toBeInTheDocument();
});

test('it does not render the value if formatValue and showValue are not provided ', () => {
  const { queryByText } = renderWithTheme(
    <Slider formatValue={undefined} showValue={false} value={20} {...props} />
  );

  const formattedValue = queryByText('20');
  expect(formattedValue).not.toBeInTheDocument();
});

test('it calls formatValue if formatValue is provided when type is "point"', async () => {
  const formatValue = jest.fn();
  renderWithTheme(
    <Slider formatValue={formatValue} showValue value={20} {...props} />
  );

  expect(formatValue).toHaveBeenCalledTimes(1);
  // Confirm the correct value gets passed in based on the type
  expect(formatValue).toHaveBeenCalledWith(20);
});

test('it calls formatValue if formatValue is provided when type is "range"', async () => {
  const formatValue = jest.fn();
  renderWithTheme(
    <Slider
      formatValue={formatValue}
      showValue
      value={[20, 80]}
      {...props}
      type="range"
    />
  );

  expect(formatValue).toHaveBeenCalledTimes(1);
  // Confirm the correct value gets passed in based on the type
  expect(formatValue).toHaveBeenCalledWith([20, 80]);
});

test('it renders a single thumb if "type === point"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <Slider {...props} type="point" value={20} />
  );

  const thumbs = await findAllByTestId(testIds.thumb);
  expect(thumbs).toHaveLength(1);
});

test('it renders two thumbs if "type === range"', async () => {
  const { findAllByTestId } = renderWithTheme(
    <Slider {...props} type="range" value={[0, 20]} />
  );

  const thumbs = await findAllByTestId(testIds.thumb);
  expect(thumbs).toHaveLength(2);
});

test('it renders the provided help message', async () => {
  const { findByText } = renderWithTheme(
    <Slider helpMessage="Helpful text" {...props} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it applies trailingMessage className to helpMessage when labelPlacement is top', async () => {
  const { findByText } = renderWithTheme(
    <Slider helpMessage="Helpful text" labelPlacement="top" {...props} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaSlider-trailingMessage');
});

test('it applies labelBottomTrailingMessage className to helpMessage when labelPlacement is bottom', async () => {
  const { findByText } = renderWithTheme(
    <Slider helpMessage="Helpful text" labelPlacement="bottom" {...props} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaSlider-labelBottomTrailingMessage');
});

test('it renders an error-state Slider', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider hasError value={20} {...props} />
  );

  const thumb = await findByTestId(testIds.thumb);
  expect(thumb).toHaveClass('ChromaSlider-thumbError');
});

test('it renders an error-state Slider with the provided errorMessage', async () => {
  const { findByText } = renderWithTheme(
    <Slider errorMessage="Slider error message" hasError {...props} />
  );

  const error = await findByText(/Slider error message/);
  expect(error).toBeInTheDocument();
});

test('it applies trailingMessage className to errorMessage when labelPlacement is top', async () => {
  const { findByText } = renderWithTheme(
    <Slider
      errorMessage="Slider error message"
      hasError
      labelPlacement="top"
      {...props}
    />
  );

  const error = await findByText(/Slider error message/);
  expect(error).toHaveClass('ChromaSlider-trailingMessage');
});

test('it applies labelBottomTrailingMessage className to errorMessage when labelPlacement is bottom', async () => {
  const { findByText } = renderWithTheme(
    <Slider
      errorMessage="Slider error message"
      hasError
      labelPlacement="bottom"
      {...props}
    />
  );

  const error = await findByText(/Slider error message/);
  expect(error).toHaveClass('ChromaSlider-labelBottomTrailingMessage');
});

// For accessibility audit
test('it applies aria-labelledby for label', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider errorMessage="Error!" hasError name="unique-name" {...props} />
  );

  const slider = await findByTestId(testIds.slider);
  expect(slider).toHaveAttribute('aria-labelledBy');
});

test('it applies aria-describedby for errorMessage', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider errorMessage="Error!" hasError name="unique-name" {...props} />
  );

  const slider = await findByTestId(testIds.slider);
  expect(slider.getAttribute('aria-describedby')).toContain(
    'error-for-unique-name'
  );
});

test('it applies aria-describedby for helpMessage', async () => {
  const { findByTestId } = renderWithTheme(
    <Slider helpMessage="Help Message" name="unique-name" {...props} />
  );

  const slider = await findByTestId(testIds.slider);
  expect(slider.getAttribute('aria-describedby')).toContain(
    'help-for-unique-name'
  );
});
