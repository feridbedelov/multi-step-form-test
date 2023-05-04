import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { deliveryCarrierOptions, errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function DeliveryCarrierDropdown() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="deliveryCarrier"
      rules={{ required: { value: true, message: errorMessages.required } }}
      render={({ field: { onChange, value } }) => (
        <FormControl>
          <InputLabel id="delivery-carrier-label">Delivery Carrier</InputLabel>
          <Select
            labelId="delivery-carrier-label"
            value={value}
            size="small"
            label="Delivery Carrier"
            onChange={onChange}
            error={!!errors.deliveryCarrier}
            {...(errors.deliveryCarrier && { helperText: String(errors.deliveryCarrier.message) })}
          >
            {deliveryCarrierOptions.map((label) => (
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
