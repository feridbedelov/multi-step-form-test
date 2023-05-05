import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function LastNameInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="lastName"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value, name } }) => (
        <TextField
          label="Last Name"
          variant="outlined"
          onChange={onChange}
          name={name}
          value={value}
          error={!!errors.lastName}
          {...(errors.lastName && { helperText: String(errors.lastName.message) })}
          size="small"
        />
      )}
    />
  );
}
