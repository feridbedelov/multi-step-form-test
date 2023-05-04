import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages, zipCodeFormat } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function DeliveryAddressZipCodeInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="deliveryAddressZipCode"
      rules={{
        required: { value: true, message: errorMessages.required },
        pattern: { value: zipCodeFormat, message: errorMessages.zipCode },
      }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          size="small"
          label="ZIP Code"
          onChange={onChange}
          error={!!errors.deliveryAddressZipCode}
          {...(errors.deliveryAddressZipCode && {
            helperText: String(errors.deliveryAddressZipCode.message),
          })}
        />
      )}
    />
  );
}
