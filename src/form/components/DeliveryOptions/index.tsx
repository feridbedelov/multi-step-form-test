import { useFormContext } from 'react-hook-form';
import { Button, Divider } from '@mui/material';

import {
  DeliveryAddressInput,
  DeliveryAddressZipCodeInput,
  DeliveryCarrierDropdown,
  DeliveryCityInput,
  DeliveryCountryInput,
  DeliveryTypeDropdown,
} from '../ui';
import { Layout, LayoutActions, LayoutTitle } from '../ui/Layout';
import { FormContextType } from '../utils/types';

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

export function DeliveryOptions({ handleNextStep, handlePrevStep }: Props) {
  const {
    formState: { isValid: isFormValid },
  } = useFormContext<FormContextType>();

  return (
    <Layout>
      <LayoutTitle>Delivery Options</LayoutTitle>

      <DeliveryTypeDropdown />
      <DeliveryCarrierDropdown />

      <Divider />

      <DeliveryCountryInput />
      <DeliveryCityInput />
      <DeliveryAddressInput />
      <DeliveryAddressZipCodeInput />

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
