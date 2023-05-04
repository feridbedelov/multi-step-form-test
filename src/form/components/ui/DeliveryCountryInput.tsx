import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function DeliveryCountryInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="deliveredCountry"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          size="small"
          label="Country"
          onChange={onChange}
          error={!!errors.deliveredCountry}
          {...(errors.deliveredCountry && { helperText: String(errors.deliveredCountry.message) })}
        />
      )}
    />
  );
}
