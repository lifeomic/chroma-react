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
import { RectangleH, RectangleV } from '@lifeomic/chromicons';

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
    fullWidth: boolean('fullWidth', false),
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

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            title="Select an option"
            aria-label="Select an option"
            name="required1"
            value="req1"
            onChange={handleChange}
            showRequiredLabel
            {...getPropOptions()}
          >
            <Radio value="req1" label="Option 1" />
            <Radio value="req2" label="Option 2" />
            <Radio value="req3" disabled label="Disabled (not selectable)" />
            <Radio
              value="req4"
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

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            title="Select an option"
            name="required10"
            value="req11"
            showRequiredLabel
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="req10" label="Option 9" />
            <Radio value="req11" label="Option 10" />
            <Radio value="req12" disabled label="Disabled (not selectable)" />
            <Radio
              value="req13"
              label="Option 12"
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

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            title="Select an option"
            color="inverse"
            name="required20"
            value="req22"
            showRequiredLabel
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="req20" label="Option 17" />
            <Radio value="req21" label="Option 18" />
            <Radio value="req22" disabled label="Disabled (not selectable)" />
            <Radio
              value="req23"
              label="Option 20"
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

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroup
            title="Select an option"
            color="inverse"
            name="required30"
            value="req33"
            showRequiredLabel
            onChange={handleChange}
            {...getPropOptions()}
          >
            <Radio value="req30" label="Option 25" />
            <Radio value="req31" label="Option 26" />
            <Radio value="req32" disabled label="Disabled (not selectable)" />
            <Radio
              value="req33"
              label="Option 28"
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
            name="chroma"
            value="opt1"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio
              value="opt0"
              label=""
              icon={RectangleH}
              aria-label="Option"
            />
            <Radio
              value="opt1"
              label=""
              icon={RectangleV}
              aria-label="Option 1"
            />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            title="Select an option"
            aria-label="Select an option"
            name="chroma0"
            value="opt3"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt2" label="Option 2" icon={RectangleH} />
            <Radio value="opt3" label="Option 3" icon={RectangleV} />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            title="Select an option"
            aria-label="Select an option"
            name="chroma1"
            value="opt5"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt4" label="Option 4" />
            <Radio value="opt5" label="Option 5" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Required Radio Group Minimal"
            title="Select an option"
            name="required1"
            value="req1"
            showRequiredLabel
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="req1" label="Option 6" />
            <Radio value="req2" label="Option 7" />
            <Radio value="req3" label="Option 8" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            name="chroma2"
            value="opt8"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt6" label="Option 6" />
            <Radio value="opt7" label="Option 7" />
            <Radio value="opt8" label="Option 8" />
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
            aria-label="Select an option"
            name="chroma3"
            value="opt10"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio
              value="opt9"
              label=""
              icon={RectangleH}
              aria-label="Option 9"
            />
            <Radio
              value="opt10"
              label=""
              icon={RectangleV}
              aria-label="Option 10"
            />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            title="Select an option"
            aria-label="Select an option"
            name="chroma4"
            value="opt12"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt11" label="Option 11" icon={RectangleH} />
            <Radio value="opt12" label="Option 12" icon={RectangleV} />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Select an option"
            title="Select an option"
            name="chroma5"
            value="opt14"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt13" label="Option 13" />
            <Radio value="opt14" label="Option 14" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Required Radio Group Minimal"
            title="Select an option"
            name="required10"
            value="req11"
            showRequiredLabel
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="req10" label="Option 6" />
            <Radio value="req11" label="Option 7" />
            <Radio value="req12" label="Option 8" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            name="chroma6"
            value="opt17"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt15" label="Option 15" />
            <Radio value="opt16" label="Option 16" />
            <Radio value="opt17" label="Option 17" />
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
            name="chroma7"
            value="opt19"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio
              value="opt18"
              label=""
              icon={RectangleH}
              aria-label="Option 18"
            />
            <Radio
              value="opt19"
              label=""
              icon={RectangleV}
              aria-label="Option 19"
            />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Select an option"
            title="Select an option"
            color="inverse"
            name="chroma8"
            value="opt21"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt20" label="Option 20" icon={RectangleH} />
            <Radio value="opt21" label="Option 21" icon={RectangleV} />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Select an option"
            title="Select an option"
            color="inverse"
            name="chroma9"
            value="opt23"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt22" label="Option 22" />
            <Radio value="opt23" label="Option 23" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Required Radio Group Minimal"
            title="Select an option"
            color="inverse"
            name="required20"
            value="req22"
            showRequiredLabel
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="req20" label="Option 6" />
            <Radio value="req21" label="Option 7" />
            <Radio value="req22" label="Option 8" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            color="inverse"
            name="chroma10"
            value="opt26"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt24" label="Option 24" />
            <Radio value="opt25" label="Option 25" />
            <Radio value="opt26" label="Option 26" />
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
            name="chroma11"
            value="opt28"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio
              value="opt27"
              label=""
              icon={RectangleH}
              aria-label="Option 27"
            />
            <Radio
              value="opt28"
              label=""
              icon={RectangleV}
              aria-label="Option 28"
            />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Select an option"
            title="Select an option"
            color="inverse"
            name="chroma12"
            value="opt30"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt29" label="Option 29" icon={RectangleH} />
            <Radio value="opt30" label="Option 30" icon={RectangleV} />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Select an option"
            title="Select an option"
            color="inverse"
            name="chroma13"
            value="opt32"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt31" label="Option 31" />
            <Radio value="opt32" label="Option 32" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="Required Radio Group Minimal"
            title="Select an option"
            color="inverse"
            name="required30"
            value="req31"
            showRequiredLabel
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="req30" label="Option 6" />
            <Radio value="req31" label="Option 7" />
            <Radio value="req32" label="Option 8" />
          </RadioGroupMinimal>

          <Divider style={{ marginBottom: '1.5rem' }} />

          <RadioGroupMinimal
            aria-label="RadioGroup with no title"
            title=""
            color="inverse"
            name="chroma14"
            value="opt35"
            onChange={handleChange}
            {...getMinimalPropOptions()}
          >
            <Radio value="opt33" label="Option 33" />
            <Radio value="opt34" label="Option 34" />
            <Radio value="opt35" label="Option 35" />
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
