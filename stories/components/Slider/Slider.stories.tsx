import * as React from 'react';
import md from './default.md';
import { Container } from '../../storyComponents/Container';
import { Slider } from '../../../src/components/Slider';
import { storiesOf } from '@storybook/react';

const SliderPointStory: React.FC = () => {
  const [point, setPoint] = React.useState(20);
  const onPointChange = (v: number) => setPoint(v);

  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Slider
        formatValue={(value: number) => `${value} cm`}
        label="Point Slider"
        onValueChange={onPointChange}
        showValue
        type="point"
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
        formatValue={(value: number[]) => `${value?.[0]}-${value?.[1]} cm`}
        label="Range Slider"
        onValueChange={onPointChange}
        showValue
        value={range}
        type="range"
      />
    </Container>
  );
};

const SliderLabelTop: React.FC = () => {
  const [point, setPoint] = React.useState(20);
  const onPointChange = (v: number) => setPoint(v);

  return (
    <Container containerStyles={{ display: 'flex', flexFlow: 'wrap' }}>
      <Container
        containerStyles={{
          background: '#fff',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            disabled
            label="Disabled slider"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show no value)"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show value)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>

      <Container
        containerStyles={{
          background: '#f5f8fa',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            disabled
            label="Disabled slider"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show no value)"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show value)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>

      <Container
        containerStyles={{
          background: '#006eb7',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            color="inverse"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            disabled
            label="Disabled slider"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show no value)"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show value)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>

      <Container
        containerStyles={{
          background: '#484049',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            color="inverse"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            disabled
            label="Disabled slider"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show no value)"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show value)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>
    </Container>
  );
};

const SliderLabelBottom: React.FC = () => {
  const [point, setPoint] = React.useState(20);
  const onPointChange = (v: number) => setPoint(v);

  return (
    <Container containerStyles={{ display: 'flex', flexFlow: 'wrap' }}>
      <Container
        containerStyles={{
          background: '#fff',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            disabled
            label="Disabled slider"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show no value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            helpMessage="Select a point"
            label="Slider with help message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>

      <Container
        containerStyles={{
          background: '#f5f8fa',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            disabled
            label="Disabled slider"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show no value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            label="Slider (with label + show value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            helpMessage="Select a point"
            label="Slider with help message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>

      <Container
        containerStyles={{
          background: '#006eb7',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            color="inverse"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            disabled
            label="Disabled slider"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show no value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            color="inverse"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            helpMessage="Select a point"
            label="Slider with help message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>

      <Container
        containerStyles={{
          background: '#484049',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider"
            color="inverse"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            disabled
            label="Disabled slider"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show no value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            label="Slider (with label + show value)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            formatValue={(value: number) => `${value} cm`}
            label="Slider (with label + show value + format)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            aria-label="Slider with no label"
            color="inverse"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            type="point"
            value={point}
            valuePlacement="center"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Slider
            color="inverse"
            helpMessage="Select a point"
            label="Slider with help message"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            type="point"
            value={point}
          />
        </div>
      </Container>
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
  .add('Label placement top', () => <SliderLabelTop />, {
    readme: { content: md },
  })
  .add('Label placement bottom', () => <SliderLabelBottom />, {
    readme: { content: md },
  });
