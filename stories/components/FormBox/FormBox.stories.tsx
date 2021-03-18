import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../../../src/components/Checkbox';
import { FormBox } from '../../../src/components/FormBox';
import { Radio, RadioGroup, RadioGroupMinimal } from '../../../src/components/Radio';
import { SearchField } from '../../../src/components/SearchField';
import { Select, SelectOption } from '../../../src/components/Select';
import { TextArea } from '../../../src/components/TextArea';
import { TextField } from '../../../src/components/TextField';
import { Toggle } from '../../../src/components/Toggle';
import { makeStyles } from '../../../src/styles';
import { Container } from '../../storyComponents/Container';
import { Box } from '../../../src/components/Box';
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
          <RadioGroupMinimal
            aria-label="Select an option"
            title=""
            name="radioGroupMinimal1"
            value="opt1"
          >
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
            <Radio value="opt3" label="Option 3" />
          </RadioGroupMinimal>
          <Box>
            <RadioGroup
              aria-label="Select an option"
              title="Select an option"
              name="radioGroup2"
              value="opt4"
              >
              <Radio value="opt4" label="Option 4" />
              <Radio value="opt5" label="Option 5" />
              <Radio value="opt6" label="Option 6" />
            </RadioGroup>
            <RadioGroupMinimal
              aria-label="Select an option"
              title="Select an option"
              direction="column"
              name="radioGroupMinimal3"
              value="opt7"
            >
              <Radio value="opt7" label="Option 7" />
              <Radio value="opt8" label="Option 8" />
              <Radio value="opt9" label="Option 9" />
            </RadioGroupMinimal>
          </Box>
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
          <RadioGroupMinimal
            aria-label="Select an option"
            title=""
            name="radioGroupMinimal4"
            value="opt10"
          >
            <Radio value="opt10" label="Option 10" />
            <Radio value="opt11" label="Option 11" />
            <Radio value="opt12" label="Option 12" />
          </RadioGroupMinimal>
          <Box>
            <RadioGroup
              aria-label="Select an option"
              title="Select an option"
              name="radioGroup5"
              value="opt13"
              >
              <Radio value="opt13" label="Option 13" />
              <Radio value="opt14" label="Option 14" />
              <Radio value="opt15" label="Option 15" />
            </RadioGroup>
            <RadioGroupMinimal
              aria-label="Select an option"
              title="Select an option"
              direction="column"
              name="radioGroupMinimal6"
              value="opt16"
            >
              <Radio value="opt16" label="Option 16" />
              <Radio value="opt17" label="Option 17" />
              <Radio value="opt18" label="Option 18" />
            </RadioGroupMinimal>
          </Box>
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
          <RadioGroupMinimal
            aria-label="Select an option"
            title=""
            color="inverse"
            name="radioGroupMinimal7"
            value="opt19"
          >
            <Radio value="opt19" label="Option 19" />
            <Radio value="opt20" label="Option 20" />
            <Radio value="opt21" label="Option 21" />
          </RadioGroupMinimal>
          <Box>
            <RadioGroup
              aria-label="Select an option"
              title="Select an option"
              name="radioGroup8"
              value="opt22"
              color="inverse"
              >
              <Radio value="opt22" label="Option 22" />
              <Radio value="opt23" label="Option 23" />
              <Radio value="opt24" label="Option 24" />
            </RadioGroup>
            <RadioGroupMinimal
              aria-label="Select an option"
              title="Select an option"
              direction="column"
              color="inverse"
              name="radioGroupMinimal9"
              value="opt25"
            >
              <Radio value="opt25" label="Option 25" />
              <Radio value="opt26" label="Option 26" />
              <Radio value="opt27" label="Option 27" />
            </RadioGroupMinimal>
          </Box>
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
          <RadioGroupMinimal
            aria-label="Select an option"
            title=""
            color="inverse"
            name="radioGroupMinimal10"
            value="opt28"
          >
            <Radio value="opt28" label="Option 28" />
            <Radio value="opt29" label="Option 29" />
            <Radio value="opt30" label="Option 30" />
          </RadioGroupMinimal>
          <Box>
            <RadioGroup
              aria-label="Select an option"
              title="Select an option"
              name="radioGroup11"
              value="opt31"
              color="inverse"
              >
              <Radio value="opt31" label="Option 31" />
              <Radio value="opt32" label="Option 32" />
              <Radio value="opt33" label="Option 33" />
            </RadioGroup>
            <RadioGroupMinimal
              aria-label="Select an option"
              title="Select an option"
              direction="column"
              color="inverse"
              name="radioGroupMinimal12"
              value="opt34"
            >
              <Radio value="opt34" label="Option 34" />
              <Radio value="opt35" label="Option 35" />
              <Radio value="opt36" label="Option 36" />
            </RadioGroupMinimal>
          </Box>
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
