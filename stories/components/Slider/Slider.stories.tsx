import * as React from 'react';
import md from './default.md';
import { Container } from '../../storyComponents/Container';
import { FormBox } from '../../../src/components/FormBox';
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
        formatValue={(value: number | undefined) => `${value} cm`}
        label="Point Slider"
        onValueChange={onPointChange}
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
        onValueChange={onPointChange}
        value={range}
        type="range"
      />
    </Container>
  );
};

const SliderAll: React.FC = () => {
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
        <FormBox>
          <Slider
            aria-label="Slider"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            disabled
            label="Disabled slider"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            label="Slider with label"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            label="Slider with label (placement bottom)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            label="Slider with label and value"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            formatValue={(value: number | undefined) => `${value} cm`}
            label="Slider with label and formatted value"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="left"
          />

          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="center"
          />

          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="right"
          />

          <Slider
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            value={point}
          />
        </FormBox>
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
        <FormBox>
          <Slider
            aria-label="Slider"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            disabled
            label="Disabled slider"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            label="Slider with label"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            label="Slider with label (placement bottom)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            label="Slider with label and value"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            formatValue={(value: number | undefined) => `${value} cm`}
            label="Slider with label and formatted value"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="left"
          />

          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="center"
          />

          <Slider
            aria-label="Slider with no label"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="right"
          />

          <Slider
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            value={point}
          />
        </FormBox>
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
        <FormBox>
          <Slider
            aria-label="Slider"
            color="inverse"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            disabled
            color="inverse"
            label="Disabled slider"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            color="inverse"
            label="Slider with label"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            color="inverse"
            label="Slider with label (placement bottom)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            color="inverse"
            label="Slider with label and value"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            color="inverse"
            formatValue={(value: number | undefined) => `${value} cm`}
            label="Slider with label and formatted value"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="left"
          />

          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="center"
          />

          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="right"
          />

          <Slider
            color="inverse"
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            color="inverse"
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            value={point}
          />
        </FormBox>
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
        <FormBox>
          <Slider
            aria-label="Slider"
            color="inverse"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            disabled
            color="inverse"
            label="Disabled slider"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            color="inverse"
            label="Slider with label"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            color="inverse"
            label="Slider with label (placement bottom)"
            labelPlacement="bottom"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            color="inverse"
            label="Slider with label and value"
            onValueChange={onPointChange}
            showValue
            value={point}
          />

          <Slider
            color="inverse"
            formatValue={(value: number | undefined) => `${value} cm`}
            label="Slider with label and formatted value"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="left"
          />

          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="center"
          />

          <Slider
            aria-label="Slider with no label"
            color="inverse"
            onValueChange={onPointChange}
            showValue
            value={point}
            valuePlacement="right"
          />

          <Slider
            color="inverse"
            errorMessage="Field is required"
            hasError
            label="Slider with error message"
            onValueChange={onPointChange}
            value={point}
          />

          <Slider
            color="inverse"
            helpMessage="Select a point"
            label="Slider with help message"
            onValueChange={onPointChange}
            value={point}
          />
        </FormBox>
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
  .add('All', () => <SliderAll />, {
    readme: { content: md },
  });
