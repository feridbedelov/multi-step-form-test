import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function FirstNameInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="firstName"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value, name } }) => (
        <TextField
          label="First Name"
          name={name}
          variant="outlined"
          onChange={onChange}
          value={value}
          error={!!errors.firstName}
          {...(errors.firstName && { helperText: String(errors.firstName.message) })}
          size="small"
        />
      )}
    />
  );
}
