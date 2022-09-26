import React from 'react';

import { baseBoxShadows } from '../../../src/styles/createBoxShadows';

export default {
  title: 'Styles/Shadows',
  parameters: {
    docs: {
      description: {
        component: `Chroma provides a collection of base boxShadows along side of \`createTheme\` and \`createBoxShadows\`.

To use the base box shadows directly, without referencing from the theme, you can generate the base box shadows by calling \`createBoxShadows\` without any arguments

\`\`\`tsx
import { createBoxShadows } from '@lifeomic/chroma-react/styles';

const boxShadows = createBoxShadows();
\`\`\`

The shadows should be available via the "theme". The most common use case should be for components using the "withStyles" HOC.

\`\`\`tsx
import { useStyles } from '@lifeomic/chroma-react/styles';

const useStyles = makeStyles((theme) => ({
  boxShadow: theme.boxShadows.table,
}));
\`\`\`

### Links

- [Utility Source](https://github.com/lifeomic/chroma-react/blob/master/src/styles/createBoxShadows.ts)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/styles/boxShadows/boxShadows.stories.tsx) `,
      },
    },
  },
};

interface BaseBoxProps {
  name: string;
  shadow: string;
}

const BaseBox: React.FunctionComponent<BaseBoxProps> = ({ name, shadow }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '12rem',
      height: '12rem',
      boxShadow: shadow,
      marginBottom: '3rem',
      fontWeight: 'bold',
    }}
  >
    {name}
  </div>
);

export const Shadows = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    {Object.entries(baseBoxShadows).map(([key, value]) => (
      <BaseBox key={key} name={key} shadow={value} />
    ))}
  </div>
);
