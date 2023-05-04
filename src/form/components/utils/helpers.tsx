import { ReactElement, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { render as renderRtl } from '@testing-library/react';

import { defaultFormValues } from './defaultFormValues';
import { FormContextType } from './types';

export const render = (ui: ReactElement, defaultValues: Partial<typeof defaultFormValues> = {}) => {
  const Providers = ({ children }: { children: ReactNode }) => {
    const formMethods = useForm<FormContextType>({
      defaultValues: {
        ...defaultFormValues,
        ...defaultValues,
      },
    });

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...formMethods}>{children}</FormProvider>
      </LocalizationProvider>
    );
  };

  return renderRtl(ui, { wrapper: Providers });
};
