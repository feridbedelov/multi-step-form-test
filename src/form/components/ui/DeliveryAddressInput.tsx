import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function DeliveryAddressInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="deliveryAddress"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value, name } }) => (
        <TextField
          value={value}
          name={name}
          size="small"
          label="Delivery Address"
          onChange={onChange}
          error={!!errors.deliveryAddress}
          {...(errors.deliveryAddress && { helperText: String(errors.deliveryAddress.message) })}
        />
      )}
    />
  );
}
