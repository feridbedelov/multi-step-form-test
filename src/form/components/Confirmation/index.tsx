import { useFormContext } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { FormContextType } from '../utils/types';

import classes from './styles.module.scss';

interface Props {
  handlePrevStep: () => void;
}

export function Confirmation({ handlePrevStep }: Props) {
  const { getValues } = useFormContext<FormContextType>();
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    deliveryType,
    deliveryCarrier,
    deliveryAddress,
    deliveredCountry,
    deliveredCity,
    deliveryAddressZipCode,
    accountHolderName,
    accountNumber,
    accountExpirationDate,
    accountSecurityCode,
  } = getValues();

  const renderDetails = (key: string, value: string) => (
    <div className={classes.detailsRow}>
      <Typography fontWeight={600}>{key}: </Typography>
      <Typography>{value}</Typography>
    </div>
  );

  return (
    <div className={classes.confirmationContainer}>
      <Typography variant="h4" align="center">
        Confirmation
      </Typography>

      <div className={classes.contentContainer}>
        <div className={classes.stepInfoBlock}>
          {renderDetails('First Name', firstName)}
          {renderDetails('Last Name', lastName)}
          {renderDetails('Email', email)}
          {renderDetails('Phone Number', phoneNumber)}
        </div>
        <div className={classes.stepInfoBlock}>
          {renderDetails('Delivery Type', deliveryType)}
          {renderDetails('Delivery Carrier', deliveryCarrier)}
          {renderDetails('Country', deliveredCountry)}
          {renderDetails('City', deliveredCity)}
          {renderDetails('Delivery Address', deliveryAddress)}
          {renderDetails('Zip Code', deliveryAddressZipCode)}
        </div>
        <div className={classes.stepInfoBlock}>
          {renderDetails('Account Holder', accountHolderName)}
          {renderDetails('Account Number', accountNumber)}
          {renderDetails('Expiration Date', dayjs(accountExpirationDate).format('MM/YYYY'))}
          {renderDetails('Security Code', accountSecurityCode)}
        </div>
      </div>

      <div className={classes.actions}>
        <Button variant="outlined" color="primary" onClick={handlePrevStep}>
          Previous
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}
