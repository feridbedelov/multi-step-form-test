import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages, phoneNumberFormat } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function PhoneNumberInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="phoneNumber"
      rules={{
        required: { value: true, message: errorMessages.required },
        pattern: { value: phoneNumberFormat, message: errorMessages.phoneNumber },
      }}
      render={({ field: { onChange, value, name } }) => (
        <TextField
          label="Phone Number"
          variant="outlined"
          onChange={onChange}
          value={value}
          name={name}
          error={!!errors.phoneNumber}
          {...(errors.phoneNumber && { helperText: String(errors.phoneNumber.message) })}
          size="small"
        />
      )}
    />
  );
}
