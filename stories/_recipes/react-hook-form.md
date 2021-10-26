# react-hook-form recipe

[react-hook-form](https://react-hook-form.com/) is a great library for handling forms. It's extremely flexible and pretty straight forward to use out of the box. The only caveat is certain components must be wrapped in their "Controller", such as `RadioGroup`.

```jsx
import { Button } from '@lifeomic/chroma-react/components/Button';
import { Controller, useForm } from 'react-hook-form';
import { FormBox } from '@lifeomic/chroma-react/components/FormBox';
import { Modal } from '@lifeomic/chroma-react/components/Modal';
import { Radio, RadioGroup } from '@lifeomic/chroma-react/components/Radio';
import { TextArea } from '@lifeomic/chroma-react/components/TextArea';
import { TextField } from '@lifeomic/chroma-react/components/TextField';
import * as React from 'react';

export const MyModal = ({ item, disableAction, onDismiss, onEdit }) => {
  const { register, handleSubmit, errors, control } = useForm();

  const handleSave = (formValues) => {
    onEdit?.({ ...formValues });
  };

  return (
    <Modal
      isOpen={!!item}
      onDismiss={onDismiss}
      size={1}
      title="My Form"
      fullWidth
      isFormContent
      onFormSubmit={handleSubmit(handleSave)}
      actions={
        <React.Fragment>
          <Button variant="text" onClick={onDismiss}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={disableAction}>
            Save
          </Button>
        </React.Fragment>
      }
    >
      <FormBox>
        <TextField
          defaultValue={item.name}
          label="Name"
          name="name"
          hasError={errors.name}
          errorMessage={errors.name && errors.name.message}
          ref={register({
            required: 'Name is required',
            validate: validation.required,
          })}
          fullWidth
        />
        <TextArea
          defaultValue={item.description}
          label="Description"
          name="description"
          secondaryLabel="(Optional)"
          ref={register}
          fullWidth
        />
        <Controller
          defaultValue={item.type}
          name="type"
          control={control}
          as={
            <RadioGroup title="Type">
              <Radio
                label="Option 1"
                value="option-1"
                helpMessage="This is option-1"
              />
              <Radio
                label="Option 2"
                value="option-2"
                helpMessage="This is option-2"
              />
            </RadioGroup>
          }
        />
        <Controller
          as={<Slider onValueChange={(value) => setValue('age', value)} />}
          control={control}
          defaultValue={50}
          label="Age"
          name="age"
        />
        <Controller
          as={
            <Slider
              formatValue={(value) => {
                if (value === undefined) {
                  return '';
                }
                const minDate = moment(value[0], 'MM/DD/YYYY');
                const maxDate = moment(value[1], 'MM/DD/YYYY');
                return `${minDate} - ${maxDate}`;
              }}
              onValueChange={(value) => setValue('date', value)}
              type="range"
            />
          }
          control={control}
          defaultValue={[972220155000, 1634908125033]}
          label="Date Range"
          name="date"
        />
      </FormBox>
    </Modal>
  );
};
```
