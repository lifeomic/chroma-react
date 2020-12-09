import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { Select, SelectOption } from '../../../src/components/Select';
import { Container } from '../../storyComponents/Container';
import { Noop } from '../../storyComponents/Noop';
import defaultMd from './default.md';
import selectedOptionDisplayMd from './selectedOptionDisplay.md';
import selectOptionMd from './selectOption.md';

const SelectStory: React.FC = () => {
  const [selectValue, setSelectValue] = React.useState<string | undefined>(
    undefined
  );

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
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            helpMessage="Some helper text…"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            secondaryLabel="Optional"
            placeholder="Optionally pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            errorMessage="This is required!"
            hasError
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select label="Disabled" placeholder="Pick one…" disabled>
            <SelectOption title="Option 1" value="option 1" />
          </Select>
          <Select
            label="Full Width"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            fullWidth
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            aria-label="Select with no label"
            label=""
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
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
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            helpMessage="Some helper text…"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            secondaryLabel="Optional"
            placeholder="Optionally pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            errorMessage="This is required!"
            hasError
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select label="Disabled" placeholder="Pick one…" disabled>
            <SelectOption title="Option 1" value="option 1" />
          </Select>
          <Select
            label="Full Width"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            fullWidth
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            aria-label="Select with no label"
            label=""
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
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
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
            helpMessage="Some helper text…"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            secondaryLabel="Optional"
            placeholder="Optionally pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
            errorMessage="This is required!"
            hasError
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Disabled"
            placeholder="Pick one…"
            color="inverse"
            disabled
          >
            <SelectOption title="Option 1" value="option 1" />
          </Select>
          <Select
            label="Full Width"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
            fullWidth
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            aria-label="Select with no label"
            label=""
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
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
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
            helpMessage="Some helper text…"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            secondaryLabel="Optional"
            placeholder="Optionally pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
            errorMessage="This is required!"
            hasError
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            label="Disabled"
            placeholder="Pick one…"
            color="inverse"
            disabled
          >
            <SelectOption title="Option 1" value="option 1" />
          </Select>
          <Select
            label="Full Width"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
            fullWidth
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <Select
            aria-label="Select with no label"
            label=""
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            color="inverse"
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Select', module)
  .add('Default', () => <SelectStory />, {
    readme: { content: defaultMd },
  })
  .add('Select Option', () => <Noop />, {
    readme: { content: selectOptionMd },
  })
  .add('Selected Option Display', () => <Noop />, {
    readme: { content: selectedOptionDisplayMd },
  });
