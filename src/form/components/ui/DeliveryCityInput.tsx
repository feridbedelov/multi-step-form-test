import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function DeliveryCityInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="deliveredCity"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          size="small"
          label="City"
          onChange={onChange}
          error={!!errors.deliveredCity}
          {...(errors.deliveredCity && { helperText: String(errors.deliveredCity.message) })}
        />
      )}
    />
  );
}
