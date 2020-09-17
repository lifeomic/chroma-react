import { storiesOf } from '@storybook/react';
import { boolean, radios } from '@storybook/addon-knobs';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { Radio, RadioGroup, RadioGroupProps, RadioGroupMinimal, RadioGroupMinimalProps } from '../../../src/components/Radio';
import { Container } from '../../storyComponents/Container';
import radioMd from './radio.md';
import radioGroupMd from './radioGroup.md';
import radioGroupMinimalMd from './radioGroupMinimal.md';

const getPropOptions = (): RadioGroupProps => {
  return {
    align: radios<'center' | 'flex-start'>(
      'align',
      {
        center: 'center',
        flexStart: 'flex-start',
      },
      'flex-start'
    ),
    direction: radios<'column' | 'row'>(
      'direction',
      {
        column: 'column',
        row: 'row',
      },
      'column'
    ),
    justify: radios<'center' | 'flex-start' | 'space-between' | 'space-evenly'>(
      'justify',
      {
        center: 'center',
        flexStart: 'flex-start',
        spaceBetween: 'space-between',
        spaceEvenly: 'space-evenly',
      },
      'flex-start'
    ),
  };
};

const getMinimalPropOptions = (): RadioGroupMinimalProps => {
  return {
    background: boolean('background', true),
    direction: radios<'column' | 'row'>(
      'direction',
      {
        column: 'column',
        row: 'row',
      },
      'row'
    ),
  };
};

const RadioStory: React.FC = () => {
  const [valueProp, setValueProp] = React.useState('opt2');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueProp(e.target.value);
  };
  console.log(`selected value is: ${valueProp}`);

  return (
    <Container
      containerStyles={{ display: 'flex', flexFlow: 'wrap', padding: 0 }}
    >
      <Container
        containerStyles={{
          background: '#fff',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <RadioGroup
            title="Select an option"
            name="chroma1"
            value="opt2"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio value="opt3" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt4"
              label="Option 4"
              helpMessage="This is some helper text."
            />
          </RadioGroup>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#f5f8fa',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <RadioGroup
            title="Select an option"
            name="chroma2"
            value="opt1"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio name="chroma2" value="opt1" label="Option 1" />
            <Radio name="chroma2" value="opt2" label="Option 2" />
            <Radio
              name="chroma2"
              value="opt3"
              disabled
              label="Disabled (not selectable)"
            />
            <Radio
              name="chroma2"
              value="opt4"
              label="Option 4"
              helpMessage="This is some helper text."
            />
          </RadioGroup>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#0096e1',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <RadioGroup
            title="Select an option"
            color="inverse"
            name="chroma3"
            value="opt1"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio name="chroma3" value="opt1" label="Option 1" />
            <Radio name="chroma3" value="opt2" label="Option 2" />
            <Radio
              name="chroma3"
              value="opt3"
              disabled
              label="Disabled (not selectable)"
            />
            <Radio
              name="chroma3"
              value="opt4"
              label="Option 4"
              helpMessage="This is some helper text."
            />
          </RadioGroup>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#484049',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <RadioGroup
            title="Select an option"
            color="inverse"
            name="chroma4"
            value="opt4"
            onChange={handleChange}
            {...getPropOptions()}
            >
            <Radio name="chroma4" value="opt1" label="Option 1" />
            <Radio name="chroma4" value="opt2" label="Option 2" />
            <Radio
              name="chroma4"
              value="opt3"
              disabled
              label="Disabled (not selectable)"
              />
            <Radio
              name="chroma4"
              value="opt4"
              label="Option 4"
              helpMessage="This is some helper text."
              />
          </RadioGroup>
        </FormBox>
      </Container>
    </Container>
  );
};

const RadioMinimalStory: React.FC = () => {
  const [valueProp, setValueProp] = React.useState('opt2');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueProp(e.target.value);
  };
  console.log(`selected value is: ${valueProp}`);
  
  return (
    <Container
    containerStyles={{ display: 'flex', flexFlow: 'wrap', padding: 0 }}
    >
      <Container
        containerStyles={{
          background: '#fff',
          flexFlow: 'column',
          padding: 0,
        }}
        >
        <FormBox padding={2}>
          <RadioGroupMinimal
            title="Select an option"
            name="chroma1"
            value="opt2"
            onChange={handleChange}
            {...getMinimalPropOptions()}
            >
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio
              value="opt3"
              label="Option 3"
              />
          </RadioGroupMinimal>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#f5f8fa',
          flexFlow: 'column',
          padding: 0,
        }}
        >
        <FormBox padding={2}>
          <RadioGroupMinimal
            title="Select an option"
            name="chroma2"
            value="opt1"
            onChange={handleChange}
            {...getMinimalPropOptions()}
            >
            <Radio name="chroma2" value="opt1" label="Option 1" />
            <Radio name="chroma2" value="opt2" label="Option 2" />
            <Radio
              name="chroma2"
              value="opt3"
              label="Option 3"
              />
          </RadioGroupMinimal>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#0096e1',
          flexFlow: 'column',
          padding: 0,
        }}
        >
        <FormBox padding={2}>
          <RadioGroupMinimal
            title="Select an option"
            color="inverse"
            name="chroma3"
            value="opt1"
            onChange={handleChange}
            {...getMinimalPropOptions()}
            >
            <Radio name="chroma3" value="opt1" label="Option 1" />
            <Radio name="chroma3" value="opt2" label="Option 2" />
            <Radio
              name="chroma3"
              value="opt3"
              label="Option 3"
              />
          </RadioGroupMinimal>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#484049',
          flexFlow: 'column',
          padding: 0,
        }}
        >
        <FormBox padding={2}>
          <RadioGroupMinimal
            title="Select an option"
            color="inverse"
            name="chroma4"
            value="opt1"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio name="chroma4" value="opt1" label="Option 1" />
            <Radio name="chroma4" value="opt2" label="Option 2" />
            <Radio
              name="chroma4"
              value="opt3"
              label="Option 3"
            />
          </RadioGroupMinimal>
        </FormBox>
      </Container>
    </Container>
  );
};


storiesOf('Form Components/Radio', module)
  .add('Radio Group', () => <RadioStory />, {
    readme: { content: radioGroupMd },
  })
  .add('Radio Group Minimal', () => <RadioMinimalStory />, {
    readme: { content: radioGroupMinimalMd },
  })
  .add('Radio', () => <RadioStory />, {
    readme: { content: radioMd },
  });
