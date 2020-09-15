import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { ComboBox, SelectOption } from '../../../src/components/Select';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const ComboBoxStory: React.FC = () => {
  const [comboValue, setComboValue] = React.useState<Array<string> | undefined>(
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
          <ComboBox
            label="ComboBox"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => {
              setComboValue(v);
            }}
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Disabled"
            placeholder="Pick any that apply…"
            disabled
          >
            <SelectOption title="Option 1" value="option 1" />
          </ComboBox>
          <ComboBox
            label="Full Width"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
            fullWidth
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
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
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Disabled"
            placeholder="Pick any that apply…"
            disabled
          >
            <SelectOption title="Option 1" value="option 1" />
          </ComboBox>
          <ComboBox
            label="Full Width"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
            fullWidth
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
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
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
            color="inverse"
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Disabled"
            placeholder="Pick any that apply…"
            color="inverse"
            disabled
          >
            <SelectOption title="Option 1" value="option 1" />
          </ComboBox>
          <ComboBox
            label="Full Width"
            placeholder="Pick any that apply…"
            color="inverse"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
            fullWidth
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
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
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
            color="inverse"
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Select option(s)"
            placeholder="Pick any that apply…"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
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
          </ComboBox>
          <ComboBox
            label="Disabled"
            placeholder="Pick any that apply…"
            color="inverse"
            disabled
          >
            <SelectOption title="Option 1" value="option 1" />
          </ComboBox>
          <ComboBox
            label="Full Width"
            placeholder="Pick any that apply…"
            color="inverse"
            value={comboValue}
            onChange={(v: Array<string>) => setComboValue(v)}
            fullWidth
          >
            <SelectOption
              title="Option 1 has really long content"
              value="option 1"
            />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </ComboBox>
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/ComboBox', module).add(
  'Default',
  () => <ComboBoxStory />,
  {
    readme: { content: defaultMd },
  }
);
