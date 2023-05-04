import { deliveryCarrierOptions, deliveryTypeOptions } from './constants';
import { FormContextType } from './types';

export const defaultFormValues: FormContextType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  deliveryType: deliveryTypeOptions[0],
  deliveryCarrier: deliveryCarrierOptions[0],
  deliveryAddress: '',
  deliveryAddressZipCode: '',
  deliveredCountry: '',
  deliveredCity: '',
  accountHolderName: '',
  accountNumber: '',
  accountExpirationDate: null,
  accountSecurityCode: '',
};
