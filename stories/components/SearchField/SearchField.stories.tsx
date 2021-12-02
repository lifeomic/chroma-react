import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { SearchField } from '../../../src/components/SearchField';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const SearchFieldStory: React.FC = () => {
  const handleSearchEnter = (value: string) => {
    console.log(`Search entered with ${value}`);
  };

  const [controlledValue, setControlledValue] = React.useState<string>('');

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
          <SearchField
            aria-label="Search"
            onSearch={handleSearchEnter}
            onClear={() => console.log('cleared')}
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
          />
          <SearchField
            aria-label="Search"
            placeholder="Disabled"
            onSearch={handleSearchEnter}
            disabled
          />
          <SearchField
            aria-label="Search"
            placeholder="Broaden your search&hellip;"
            onSearch={handleSearchEnter}
            fullWidth
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField
            aria-label="Search"
            onSearch={handleSearchEnter}
            height={0}
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
          />
          <SearchField
            aria-label="Search"
            helpMessage="Controlled component"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            onSearch={handleSearchEnter}
            onClear={() => console.log('cleared')}
          />
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
          <SearchField aria-label="Search" onSearch={handleSearchEnter} />
          <SearchField aria-label="Search" placeholder="Search for&hellip;" />
          <SearchField aria-label="Search" placeholder="Disabled" disabled />
          <SearchField
            aria-label="Broaden your search&hellip;"
            placeholder="Broaden your search&hellip;"
            fullWidth
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField
            aria-label="Search"
            onSearch={handleSearchEnter}
            height={0}
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
          />
          <SearchField
            aria-label="Search"
            helpMessage="Controlled component"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            onSearch={handleSearchEnter}
          />
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
          <SearchField
            aria-label="Search"
            color="inverse"
            onSearch={handleSearchEnter}
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
          />
          <SearchField
            aria-label="Search"
            placeholder="Disabled"
            color="inverse"
            onSearch={handleSearchEnter}
            disabled
          />
          <SearchField
            aria-label="Broaden your search&hellip;"
            placeholder="Broaden your search&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
            fullWidth
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField
            aria-label="Search"
            color="inverse"
            onSearch={handleSearchEnter}
            height={0}
          />
          <SearchField
            aria-label="Search"
            color="inverse"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
          />
          <SearchField
            aria-label="Search"
            color="inverse"
            helpMessage="Controlled component"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            onSearch={handleSearchEnter}
          />
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
          <SearchField
            aria-label="Search"
            color="inverse"
            onSearch={handleSearchEnter}
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
          />
          <SearchField
            aria-label="Search"
            placeholder="Disabled"
            color="inverse"
            onSearch={handleSearchEnter}
            disabled
          />
          <SearchField
            aria-label="Broaden your search&hellip;"
            placeholder="Broaden your search&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
            fullWidth
          />
          <SearchField
            aria-label="Search"
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField
            aria-label="Search"
            color="inverse"
            onSearch={handleSearchEnter}
            height={0}
          />
          <SearchField
            aria-label="Search"
            color="inverse"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
          />
          <SearchField
            aria-label="Search"
            color="inverse"
            helpMessage="Controlled component"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            onSearch={handleSearchEnter}
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/SearchField', module).add(
  'Default',
  () => <SearchFieldStory />,
  { readme: { content: defaultMd } }
);
