import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Activity, Flag, User, Zap } from 'react-feather';
import { Step, Stepper } from '../../../src/components/Stepper';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const StepperStory: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <>
      <Container>
        <Stepper activeStep={activeStep} as="button" onClick={handleClick}>
          <Step icon={Zap} subTitle="950" title="Registered" />
          <Step icon={Activity} subTitle="900" title="Consented" />
          <Step icon={User} subTitle="750" title="Demographics" />
          <Step disabled icon={Flag} subTitle="550" title="Completed" />
        </Stepper>
      </Container>
      <Container>
        <Stepper activeStep={2} as="div">
          <Step icon={Zap} subTitlePillLabel="950" title="Registered" />
          <Step icon={Activity} subTitlePillLabel="900" title="Consented" />
          <Step icon={User} subTitlePillLabel="750" title="Demographics" />
          <Step icon={Flag} subTitlePillLabel="550" title="Completed" />
        </Stepper>
      </Container>
      <Container>
        <Stepper activeStep={1} as="div">
          <Step icon={Zap} title="Registered" />
          <Step icon={Activity} title="Consented" />
          <Step icon={User} title="Demographics" />
          <Step icon={Flag} title="Completed" />
        </Stepper>
      </Container>
      <Container>
        <Stepper activeStep={3} as="div">
          <Step title="Registered" />
          <Step title="Consented" />
          <Step title="Demographics" />
          <Step title="Completed" />
        </Stepper>
      </Container>
    </>
  );
};

storiesOf('Components/Stepper', module).add('Default', () => <StepperStory />, {
  readme: { content: defaultMd },
});
