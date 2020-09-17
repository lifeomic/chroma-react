# Form Components

Chroma provides form components out of the box. These are mostly presentational
components, but expose all native-events and properties (onChange, type, etc.).
If you're using a form library, such as redux-form, Formik, or react-hook-form,
please read the notes below on integration.

## react-hook-form

[react-hook-form](https://react-hook-form.com/) is a great library for handling
forms that gets out of your way. It's extremely flexible and pretty straight
forward to use out of the box. The only caveat is certain components must be
wrapped in their "Controller", such as `RadioGroup`.

```jsx
import { Button } from '@lifeomic/chroma-react-react/components/Button';
import { Controller, useForm } from 'react-hook-form';
import { defineMessages, useIntl } from 'react-intl';
import { FormBox } from '@lifeomic/chroma-react-react/components/FormBox';
import { makeStyles } from '@lifeomic/chroma-react-react/styles';
import { Modal } from '@lifeomic/chroma-react-react/components/Modal';
import {
  Radio,
  RadioGroup,
} from '@lifeomic/chroma-react-react/components/Radio';
import { TextArea } from '@lifeomic/chroma-react-react/components/TextArea';
import { TextField } from '@lifeomic/chroma-react-react/components/TextField';
import * as React from 'react';

const messages = defineMessages({
  title: {
    id: 'pages.cohorts.editCohortModal.title',
    defaultMessage: 'Update Cohort',
  },
  name: {
    id: 'pages.cohorts.editCohortModal.name',
    defaultMessage: 'Name',
  },
  description: {
    id: 'pages.cohorts.editCohortModal.description',
    defaultMessage: 'Description',
  },
  optional: {
    id: 'pages.cohorts.editCohortModal.optional',
    defaultMessage: 'Optional',
  },
  type: {
    id: 'pages.cohorts.editCohortModal.type',
    defaultMessage: 'Type',
  },
  static: {
    id: 'pages.cohorts.editCohortModal.static',
    defaultMessage: 'Static',
  },
  staticInfo: {
    id: 'pages.cohorts.editCohortModal.staticInfo',
    defaultMessage:
      'Static cohorts represent a "fixed" list of subjects. Subjects are never added or removed, but their data are still subject to change.',
  },
  dynamic: {
    id: 'pages.cohorts.editCohortModal.dynamic',
    defaultMessage: 'Dynamic',
  },
  dynamicInfo: {
    id: 'pages.cohorts.editCohortModal.dynamicInfo',
    defaultMessage:
      'Dynamic cohorts are automatically updated daily to include all subjects who currently meet the selected filter criteria.',
  },
  save: {
    id: 'pages.cohorts.editCohortModal.save',
    defaultMessage: 'Save',
  },
  cancel: {
    id: 'pages.cohorts.editCohortModal.cancel',
    defaultMessage: 'Cancel',
  },
  nameRequired: {
    id: 'pages.cohorts.editCohortModal.nameRequired',
    defaultMessage: 'The Cohort name is required',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export const EditCohortModal = ({
  cohort,
  disableAction,
  onDismiss,
  onEdit,
}) => {
  const classes = useStyles({});
  const { formatMessage } = useIntl();

  const { register, handleSubmit, errors, control } = useForm();

  const handleSave = (formValues) => {
    onEdit && onEdit({ cohort, formValues });
  };

  return (
    <Modal
      isOpen={!!cohort}
      onDismiss={onDismiss}
      size={1}
      title={formatMessage(messages.title)}
      fullWidth={true}
      isFormContent={true}
      onFormSubmit={handleSubmit(handleSave)}
      actions={
        <React.Fragment>
          <Button variant="text" onClick={onDismiss}>
            {formatMessage(messages.cancel)}
          </Button>
          <Button type="submit" variant="contained" disabled={disableAction}>
            {formatMessage(messages.save)}
          </Button>
        </React.Fragment>
      }
    >
      <FormBox className={classes.root}>
        <TextField
          defaultValue={cohort.name}
          label={formatMessage(messages.name)}
          name="name"
          hasError={errors.name}
          errorMessage={errors.name && errors.name.message}
          ref={register({
            required: formatMessage(messages.nameRequired),
            validate: validation.required,
          })}
          fullWidth
        />
        <TextArea
          defaultValue={cohort.description}
          label={formatMessage(messages.description)}
          name="description"
          secondaryLabel={formatMessage(messages.optional)}
          ref={register}
          fullWidth
        />
        <Controller
          defaultValue={cohort.type}
          name="type"
          control={control}
          as={
            <RadioGroup title={formatMessage(messages.type)}>
              <Radio
                label={formatMessage(messages.dynamic)}
                value="Dynamic"
                helpMessage={formatMessage(messages.dynamicInfo)}
              />
              <Radio
                label={formatMessage(messages.static)}
                value="Static"
                helpMessage={formatMessage(messages.staticInfo)}
              />
            </RadioGroup>
          }
        />
      </FormBox>
    </Modal>
  );
};
```

## Redux-Form

If you're using redux-form as your form library of choice, it's pretty straight
forward to get up and going. The important thing to note is that you need to use
the `meta` prop provided from redux-form and map those props to the
corresponding Chroma component props. If you're a PHC app, PHC Web Toolkit
[exposes these for you](https://bitbucket.org/lifeomic/pmp-ui/src/master/packages/phc-web-toolkit/src/components/ChromaReduxForm/),
which should be plug-and-play. Otherwise, you can view the examples there to
write your own.

```jsx
import { Field } from 'redux-form';
import {
  TextField,
  TextFieldProps,
} from '@lifeomic/chroma-react-react/components/TextField';
import { WrappedFieldProps } from 'redux-form';
import * as React from 'react';

interface ReduxTextFieldProps extends WrappedFieldProps, TextFieldProps {}

export const ReduxTextField: React.FC<ReduxTextFieldProps> = ({
  className,
  label,
  name,
  // these are the props we care about from redux-form
  meta: { touched, error, invalid },
  input,
  icon,
  tooltipMessage,
  secondaryLabel,
  placeholder,
  ...rootProps
}) => {
  return (
    <TextField
      className={className}
      // Map the redux-form props to our Chroma props
      hasError={touched && invalid}
      errorMessage={touched && error}
      label={label}
      name={name}
      icon={icon}
      tooltipMessage={tooltipMessage}
      secondaryLabel={secondaryLabel}
      placeholder={placeholder}
      {...input}
      {...rootProps}
    />
  );
};

const MyForm = () => (
  // Other redux-form specific stuff somewhere around here...
  <FormBox>
    <Field
      name="name"
      validate={[validation.required]}
      component={ReduxTextField}
      label={formatMessage(messages.name)}
      fullWidth
      // ... any other props to map over to `ReduxTextField`.
    />
  </FormBox>
);
```

## Formik

If you're a PHC app, PHC Web Toolkit
[exposes these for you](https://bitbucket.org/lifeomic/pmp-ui/src/master/packages/phc-web-toolkit/src/components/ChromaFormik/),
which should be plug-and-play. Otherwise, you can view the examples there to
write your own. These are inspired by
[formik-material-ui](https://github.com/stackworx/formik-material-ui/blob/master/packages/formik-material-ui/src/TextField.tsx).
