import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Noop } from '../storyComponents/Noop';
import formikMd from './formik.md';
import reactHookFormMd from './react-hook-form.md';
import reduxFormMd from './redux-form.md';

storiesOf('Form Components', module)
  .add('react-hook-form', () => <Noop />, {
    readme: { content: reactHookFormMd },
  })
  .add('formik', () => <Noop />, { readme: { content: formikMd } })
  .add('redux', () => <Noop />, { readme: { content: reduxFormMd } });
