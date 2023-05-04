import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';

import { EmailInput, FirstNameInput, LastNameInput, PhoneNumberInput } from '../ui';
import { Layout, LayoutActions, LayoutTitle } from '../ui/Layout';
import { FormContextType } from '../utils/types';

interface Props {
  handleNextStep: () => void;
}

export function PersonalInformation({ handleNextStep }: Props) {
  const {
    formState: { isValid: isFormValid },
  } = useFormContext<FormContextType>();

  return (
    <Layout>
      <LayoutTitle>Personal Information</LayoutTitle>

      <FirstNameInput />
      <LastNameInput />
      <EmailInput />
      <PhoneNumberInput />

      <LayoutActions>
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
