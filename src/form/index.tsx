import { FormProvider } from 'react-hook-form';
import { Step, StepLabel, Stepper } from '@mui/material';

import { Confirmation } from './components/Confirmation';
import { DeliveryOptions } from './components/DeliveryOptions';
import { PaymentOptions } from './components/PaymentOptions';
import { PersonalInformation } from './components/PersonalInfo';
import { formStepLabels } from './components/utils/constants';
import { FormStepEnum } from './components/utils/enums';
import classes from './styles.module.scss';
import { useMultiStepForm } from './useMultiStepForm';

export function MultiStepForm() {
  const {
    models: { step, formMethods },
    operations: { setStep },
  } = useMultiStepForm();

  const renderStep = () => {
    switch (step) {
      case FormStepEnum['Personal Information']:
        return (
          <PersonalInformation handleNextStep={() => setStep(FormStepEnum['Delivery Options'])} />
        );
      case FormStepEnum['Delivery Options']:
        return (
          <DeliveryOptions
            handleNextStep={() => setStep(FormStepEnum['Payment Options'])}
            handlePrevStep={() => setStep(FormStepEnum['Personal Information'])}
          />
        );
      case FormStepEnum['Payment Options']:
        return (
          <PaymentOptions
            handleNextStep={() => setStep(FormStepEnum.Confirmation)}
            handlePrevStep={() => setStep(FormStepEnum['Delivery Options'])}
          />
        );
      case FormStepEnum.Confirmation:
        return <Confirmation handlePrevStep={() => setStep(FormStepEnum['Payment Options'])} />;
      default:
        <></>;
    }
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.stepperContainer}>
        <Stepper activeStep={step} alternativeLabel data-testid="stepper-container">
          {formStepLabels.map((key) => (
            <Step key={key}>
              <StepLabel>{key}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <FormProvider {...formMethods}>{renderStep()}</FormProvider>
    </div>
  );
}
