import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { emailAddressFormat, errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function EmailInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="email"
      rules={{
        required: { value: true, message: errorMessages.required },
        pattern: { value: emailAddressFormat, message: errorMessages.email },
      }}
      render={({ field: { onChange, value, name } }) => (
        <TextField
          label="Email"
          variant="outlined"
          name={name}
          onChange={onChange}
          value={value}
          error={!!errors.email}
          {...(errors.email && { helperText: String(errors.email.message) })}
          size="small"
        />
      )}
    />
  );
}
