import { deliveryCarrierOptions, deliveryTypeOptions } from './constants';

export const defaultFormValues = {
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
  accountExpirationDate: '',
  accountSecurityCode: '',
};
