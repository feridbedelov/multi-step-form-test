import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { deliveryTypeOptions, errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function DeliveryTypeDropdown() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="deliveryType"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value } }) => (
        <FormControl>
          <InputLabel id="delivery-type-label">Delivery Type</InputLabel>
          <Select
            value={value}
            labelId="delivery-type-label"
            size="small"
            label="Delivery Type"
            onChange={onChange}
            error={!!errors.deliveryType}
            {...(errors.deliveryType && { helperText: String(errors.deliveryType.message) })}
          >
            {deliveryTypeOptions.map((label) => (
              <MenuItem value={label} key={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
