import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../../../src/components/Checkbox';
import { FormBox } from '../../../src/components/FormBox';
import { Radio, RadioGroup } from '../../../src/components/Radio';
import { SearchField } from '../../../src/components/SearchField';
import { Select, SelectOption } from '../../../src/components/Select';
import { TextArea } from '../../../src/components/TextArea';
import { TextField } from '../../../src/components/TextField';
import { Toggle } from '../../../src/components/Toggle';
import { makeStyles } from '../../../src/styles';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const useStyles = makeStyles(() => ({
  fullWidth: {
    flex: 1,
  },
  extraPadding: {
    paddingBottom: 16,
  },
}));

const FormBoxStory: React.FC = () => {
  const classes = useStyles({});
  const [selectValue, setSelectValue] = React.useState<string | undefined>(
    undefined
  );
  const handleSearchEnter = (value: string) => {
    console.log(`Search entered with ${value}`);
  };

  return (
    <Container containerStyles={{ display: 'flex', flexFlow: 'wrap' }}>
      <Container
        containerStyles={{
          background: '#fff',
          display: 'flex',
          flex: 1,
          padding: 0,
        }}
      >
        <FormBox padding={2} className={classes.fullWidth}>
          <FormBox className={classes.extraPadding}>
            <TextField aria-label="Name" label="Name" name="name" fullWidth />
            <Toggle label="Remember name" />
          </FormBox>
          <FormBox className={classes.extraPadding}>
            <TextField
              aria-label="Email"
              label="Email"
              name="email"
              type="email"
              fullWidth
            />
            <Checkbox label="Send reminders" />
          </FormBox>
          <Select
            label="Select an option"
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
          <TextArea label="Description" fullWidth />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            fullWidth
          />
          <RadioGroup title="Select an option" name="option1" value="opt1">
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio value="opt3" label="Option 3" />
          </RadioGroup>
        </FormBox>
      </Container>
      <Container
        containerStyles={{ background: '#f5f8fa', flex: 1, padding: 0 }}
      >
        <FormBox padding={2} className={classes.fullWidth}>
          <FormBox className={classes.extraPadding}>
            <TextField aria-label="Name" label="Name" name="name" fullWidth />
            <Toggle label="Remember name" />
          </FormBox>
          <FormBox className={classes.extraPadding}>
            <TextField
              aria-label="Email"
              label="Email"
              name="email"
              type="email"
              fullWidth
            />
            <Checkbox label="Send reminders" />
          </FormBox>
          <Select
            label="Select an option"
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
          <TextArea label="Description" fullWidth />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            fullWidth
          />
          <RadioGroup title="Select an option" name="option2" value="opt1">
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio value="opt3" label="Option 3" />
          </RadioGroup>
        </FormBox>
      </Container>
      <Container
        containerStyles={{ background: '#006eb7', flex: 1, padding: 0 }}
      >
        <FormBox padding={2} className={classes.fullWidth}>
          <FormBox className={classes.extraPadding}>
            <TextField
              aria-label="Name"
              label="Name"
              name="name"
              color="inverse"
              fullWidth
            />
            <Toggle label="Remember name" color="inverse" />
          </FormBox>
          <FormBox className={classes.extraPadding}>
            <TextField
              aria-label="Email"
              label="Email"
              name="email"
              type="email"
              color="inverse"
              fullWidth
            />
            <Checkbox label="Send reminders" color="inverse" />
          </FormBox>
          <Select
            label="Select an option"
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
          <TextArea label="Description" color="inverse" fullWidth />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            color="inverse"
            fullWidth
          />
          <RadioGroup
            title="Select an option"
            name="option3"
            value="opt1"
            color="inverse"
          >
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio value="opt3" label="Option 3" />
          </RadioGroup>
        </FormBox>
      </Container>
      <Container
        containerStyles={{ background: '#484049', flex: 1, padding: 0 }}
      >
        <FormBox padding={2} className={classes.fullWidth}>
          <FormBox className={classes.extraPadding}>
            <TextField
              aria-label="Name"
              label="Name"
              name="name"
              color="inverse"
              fullWidth
            />
            <Toggle label="Remember name" color="inverse" />
          </FormBox>
          <FormBox className={classes.extraPadding}>
            <TextField
              aria-label="Email"
              label="Email"
              name="email"
              type="email"
              color="inverse"
              fullWidth
            />
            <Checkbox label="Send reminders" color="inverse" />
          </FormBox>
          <Select
            label="Select an option"
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
          <TextArea label="Description" color="inverse" fullWidth />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            color="inverse"
            fullWidth
          />
          <RadioGroup
            title="Select an option"
            name="option4"
            value="opt1"
            color="inverse"
          >
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio value="opt3" label="Option 3" />
          </RadioGroup>
        </FormBox>
      </Container>
    </Container>
  );
};

const FormBoxHorizontalStory: React.FC = () => (
  <FormBox direction="row" padding={2}>
    <Checkbox label="All" />
    <Checkbox label="Draft" />
    <Checkbox label="Published" />
    <Checkbox label="Archived" />
  </FormBox>
);

storiesOf('Form Components/FormBox', module)
  .add('Default', () => <FormBoxStory />, { readme: { content: defaultMd } })
  .add('Row Direction', () => <FormBoxHorizontalStory />, {
    readme: { content: defaultMd },
  });
