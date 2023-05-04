import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { defaultFormValues } from './components/utils/defaultFormValues';
import { FormStepEnum } from './components/utils/enums';
import { FormContextType } from './components/utils/types';

export function useMultiStepForm() {
  const [step, setStep] = useState<FormStepEnum>(FormStepEnum['Personal Information']);

  const formMethods = useForm<FormContextType>({
    defaultValues: defaultFormValues,
    mode: 'all',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    formMethods.reset(formMethods.getValues());
  }, [formMethods, step]);

  return {
    models: { step, formMethods },
    operations: { setStep },
  };
}
