import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { accountNumberFormat, errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function AccountNumberInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="accountNumber"
      rules={{
        required: { value: true, message: errorMessages.required },
        pattern: { value: accountNumberFormat, message: errorMessages.accountNumber },
      }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          label="Account Number"
          onChange={onChange}
          error={!!errors.accountNumber}
          {...(errors.accountNumber && { helperText: String(errors.accountNumber.message) })}
          size="small"
        />
      )}
    />
  );
}
