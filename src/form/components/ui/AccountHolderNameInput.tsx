import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function AccountHolderNameInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="accountHolderName"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          label="Account Holder Name"
          onChange={onChange}
          error={!!errors.accountHolderName}
          {...(errors.accountHolderName && {
            helperText: String(errors.accountHolderName.message),
          })}
          size="small"
        />
      )}
    />
  );
}
