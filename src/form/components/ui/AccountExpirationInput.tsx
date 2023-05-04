import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { errorMessages } from '../utils/constants';
import { FormContextType } from '../utils/types';

export function AccountExpirationDateInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <Controller
      control={control}
      name="accountExpirationDate"
      rules={{
        required: { value: true, message: errorMessages.required },
      }}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          label="Expiration Date"
          value={value}
          onChange={onChange}
          views={['month', 'year']}
          format="MM/YYYY"
          slotProps={{
            textField: {
              ...(errors.accountExpirationDate && {
                helperText: String(errors.accountExpirationDate.message),
              }),
              size: 'small',
              error: !!errors.accountExpirationDate,
            },
          }}
        />
      )}
    />
  );
}
