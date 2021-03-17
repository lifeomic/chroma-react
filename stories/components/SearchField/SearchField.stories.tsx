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
            onSearch={handleSearchEnter}
            onClear={() => console.log('cleared')}
          />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
          />
          <SearchField
            placeholder="Disabled"
            onSearch={handleSearchEnter}
            disabled
          />
          <SearchField
            aria-label="Broaden your search&hellip;"
            placeholder="Broaden your search&hellip;"
            onSearch={handleSearchEnter}
            fullWidth
          />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField onSearch={handleSearchEnter} height={0} />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
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
          <SearchField onSearch={handleSearchEnter} />
          <SearchField placeholder="Search for&hellip;" />
          <SearchField placeholder="Disabled" disabled />
          <SearchField
            aria-label="Broaden your search&hellip;"
            placeholder="Broaden your search&hellip;"
            fullWidth
          />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField onSearch={handleSearchEnter} height={0} />
          <SearchField
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
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
          <SearchField color="inverse" onSearch={handleSearchEnter} />
          <SearchField
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
          />
          <SearchField
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
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField
            color="inverse"
            onSearch={handleSearchEnter}
            height={0}
          />
          <SearchField
            color="inverse"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
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
          <SearchField color="inverse" onSearch={handleSearchEnter} />
          <SearchField
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
          />
          <SearchField
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
            placeholder="Search for&hellip;"
            color="inverse"
            onSearch={handleSearchEnter}
            helpMessage="Helper text goes here"
          />
          <SearchField
            color="inverse"
            onSearch={handleSearchEnter}
            height={0}
          />
          <SearchField
            color="inverse"
            placeholder="Search for&hellip;"
            onSearch={handleSearchEnter}
            helpMessage="disableClearOnSearch enabled"
            disableClearOnSearch
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
