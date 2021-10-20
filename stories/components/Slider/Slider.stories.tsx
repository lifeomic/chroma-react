import * as React from 'react';
import md from './default.md';
import { Container } from '../../storyComponents/Container';
import { Slider } from '../../../src/components/Slider';
import { storiesOf } from '@storybook/react';

const SliderPointStory: React.FC = () => {
  const [point, setPoint] = React.useState([20]);
  const onPointChange = (v: number[]) => setPoint(v);

  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Slider
        formatValue={(value: number[] | undefined) => `${value} cm`}
        label="Point Slider"
        onChange={onPointChange}
        showValue
        value={point}
      />
    </Container>
  );
};

const SliderRangeStory: React.FC = () => {
  const [range, setRange] = React.useState([20, 80]);
  const onPointChange = (v: number[]) => setRange(v);

  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Slider
        formatValue={(value: number[] | undefined) =>
          `${value?.[0]}-${value?.[1]} cm`
        }
        label="Range Slider"
        onChange={onPointChange}
        showValue
        value={range}
        type="range"
      />
    </Container>
  );
};

const SliderLabelTop: React.FC = () => {
  const [point, setPoint] = React.useState([20]);
  const onPointChange = (v: number[]) => setPoint(v);

  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <Slider aria-label="Slider" onChange={onPointChange} value={point} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          disabled
          label="Disabled slider"
          onChange={onPointChange}
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          label="Slider (with label + show no value)"
          onChange={onPointChange}
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          label="Slider (with label + show value)"
          onChange={onPointChange}
          showValue
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          formatValue={(value: number[] | undefined) => `${value} cm`}
          label="Slider (with label + show value + format)"
          onChange={onPointChange}
          showValue
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          aria-label="Slider with no label"
          onChange={onPointChange}
          showValue
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          errorMessage="Field is required"
          hasError
          label="Slider with error message"
          onChange={onPointChange}
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          helpMessage="Select a point"
          label="Slider with help message"
          onChange={onPointChange}
          value={point}
        />
      </div>
    </Container>
  );
};

const SliderLabelBottom: React.FC = () => {
  const [point, setPoint] = React.useState([20]);
  const onPointChange = (v: number[]) => setPoint(v);

  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <Slider aria-label="Slider" onChange={onPointChange} value={point} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          disabled
          label="Disabled slider"
          labelPosition="bottom"
          onChange={onPointChange}
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          label="Slider (show no value)"
          labelPosition="bottom"
          onChange={onPointChange}
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          label="Slider (show value)"
          labelPosition="bottom"
          onChange={onPointChange}
          showValue
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          formatValue={(value: number[] | undefined) => `${value} cm`}
          label="Slider (show value + format)"
          labelPosition="bottom"
          onChange={onPointChange}
          showValue
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          aria-label="Slider with no label"
          labelPosition="bottom"
          onChange={onPointChange}
          showValue
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          errorMessage="Field is required"
          hasError
          label="Slider with error message"
          labelPosition="bottom"
          onChange={onPointChange}
          value={point}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Slider
          helpMessage="Select a point"
          label="Slider with help message"
          labelPosition="bottom"
          onChange={onPointChange}
          value={point}
        />
      </div>
    </Container>
  );
};

storiesOf('Components/Slider', module)
  .add('Point', () => <SliderPointStory />, {
    readme: { content: md },
  })
  .add('Range', () => <SliderRangeStory />, {
    readme: { content: md },
  })
  .add('Label position top', () => <SliderLabelTop />, {
    readme: { content: md },
  })
  .add('Label position bottom', () => <SliderLabelBottom />, {
    readme: { content: md },
  });
