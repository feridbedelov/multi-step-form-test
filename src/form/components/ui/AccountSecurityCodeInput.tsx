import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { accountSecurityCodeFormat, errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function AccountSecurityCodeInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="accountSecurityCode"
      rules={{
        required: { value: true, message: errorMessages.required },
        pattern: {
          value: accountSecurityCodeFormat,
          message: errorMessages.accountSecurityCode,
        },
      }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          label="CVC"
          onChange={onChange}
          error={!!errors.accountSecurityCode}
          {...(errors.accountSecurityCode && {
            helperText: String(errors.accountSecurityCode.message),
          })}
          size="small"
        />
      )}
    />
  );
}
