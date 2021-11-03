import { storiesOf } from '@storybook/react';
import { boolean, radios } from '@storybook/addon-knobs';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { Divider } from '../../../src/components/Divider';
import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioGroupMinimal,
  RadioGroupMinimalProps,
} from '../../../src/components/Radio';
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
            aria-label="Select an option"
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

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            aria-label="RadioGroup with no title"
            title=""
            name="chroma2"
            value="opt5"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="opt5" label="Option 5" />
            <Radio value="opt6" label="Option 6" />
            <Radio value="opt7" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt8"
              label="Option 8"
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
            name="chroma3"
            value="opt9"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="opt9" label="Option 9" />
            <Radio value="opt10" label="Option 10" />
            <Radio value="opt11" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt12"
              label="Option 12"
              helpMessage="This is some helper text."
            />
          </RadioGroup>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            aria-label="RadioGroup with no title"
            title=""
            name="chroma4"
            value="opt13"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="opt13" label="Option 13" />
            <Radio value="opt14" label="Option 14" />
            <Radio value="opt15" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt16"
              label="Option 16"
              helpMessage="This is some helper text."
            />
          </RadioGroup>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#006eb7',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <RadioGroup
            title="Select an option"
            color="inverse"
            name="chroma5"
            value="opt17"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="opt17" label="Option 17" />
            <Radio value="opt18" label="Option 18" />
            <Radio value="opt19" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt20"
              label="Option 20"
              helpMessage="This is some helper text."
            />
          </RadioGroup>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            aria-label="RadioGroup with no title"
            title=""
            name="chroma6"
            value="opt21"
            onChange={handleChange}
            color="inverse"
            {...getPropOptions()}
          >
            <Radio value="opt21" label="Option 21" />
            <Radio value="opt22" label="Option 22" />
            <Radio value="opt23" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt24"
              label="Option 24"
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
            name="chroma7"
            value="opt25"
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="opt25" label="Option 25" />
            <Radio value="opt26" label="Option 26" />
            <Radio value="opt27" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt28"
              label="Option 28"
              helpMessage="This is some helper text."
            />
          </RadioGroup>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            aria-label="RadioGroup with no title"
            title=""
            name="chroma8"
            value="opt29"
            onChange={handleChange}
            color="inverse"
            {...getPropOptions()}
          >
            <Radio value="opt29" label="Option 29" />
            <Radio value="opt30" label="Option 30" />
            <Radio value="opt31" disabled label="Disabled (not selectable)" />
            <Radio
              value="opt32"
              label="Option 32"
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
            aria-label="Select an option"
            name="chroma1"
            value="opt2"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            name="chroma2"
            value="opt5"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt3" label="Option 3" />
            <Radio value="opt4" label="Option 4" />
            <Radio value="opt5" label="Option 5" />
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
            aria-label="Select an option"
            title="Select an option"
            name="chroma3"
            value="opt7"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt6" label="Option 6" />
            <Radio value="opt7" label="Option 7" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />
          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            name="chroma4"
            value="opt10"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt8" label="Option 8" />
            <Radio value="opt9" label="Option 9" />
            <Radio value="opt10" label="Option 10" />
          </RadioGroupMinimal>
        </FormBox>
      </Container>

      <Container
        containerStyles={{
          background: '#006eb7',
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <RadioGroupMinimal
            aria-label="Select an option"
            title="Select an option"
            color="inverse"
            name="chroma5"
            value="opt11"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt11" label="Option 11" />
            <Radio value="opt12" label="Option 12" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            color="inverse"
            name="chroma6"
            value="opt13"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt13" label="Option 13" />
            <Radio value="opt14" label="Option 14" />
            <Radio value="opt15" label="Option 15" />
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
            aria-label="Select an option"
            title="Select an option"
            color="inverse"
            name="chroma7"
            value="opt16"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt16" label="Option 16" />
            <Radio value="opt17" label="Option 17" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            color="inverse"
            name="chroma8"
            value="opt22"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt18" label="Option 18" />
            <Radio value="opt19" label="Option 19" />
            <Radio value="opt20" label="Option 20" />
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
