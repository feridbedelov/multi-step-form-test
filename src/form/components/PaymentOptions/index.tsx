import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';

import {
  AccountExpirationDateInput,
  AccountHolderNameInput,
  AccountNumberInput,
  AccountSecurityCodeInput,
} from '../ui';
import { Layout, LayoutActions, LayoutTitle } from '../ui/Layout';
import { FormContextType } from '../utils/types';

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

export function PaymentOptions({ handleNextStep, handlePrevStep }: Props) {
  const {
    formState: { isValid: isFormValid },
  } = useFormContext<FormContextType>();

  return (
    <Layout>
      <LayoutTitle>Payment Options</LayoutTitle>

      <AccountHolderNameInput />
      <AccountNumberInput />
      <AccountExpirationDateInput />
      <AccountSecurityCodeInput />

      <LayoutActions>
        <Button variant="outlined" color="primary" onClick={handlePrevStep}>
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!isFormValid}
          onClick={handleNextStep}
        >
          Next
        </Button>
      </LayoutActions>
    </Layout>
  );
}
