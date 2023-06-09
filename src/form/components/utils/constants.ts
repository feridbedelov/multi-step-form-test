import dayjs from 'dayjs';

import { FormStepEnum } from './enums';

export const emailAddressFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const numberFormat = /^[0-9]*$/;
export const phoneNumberFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
export const zipCodeFormat = /^[a-zA-Z0-9][a-zA-Z0-9\- ]{0,10}[a-zA-Z0-9]$/;
export const accountNumberFormat = /^[0-9]{16}$/;
export const accountSecurityCodeFormat = /^[0-9]{3}$/;

export const deliveryTypeOptions = ['Express', 'Premium'];

export const deliveryCarrierOptions = ['FedEx', 'UPS', 'USPS'];

export const errorMessages = {
  required: 'A field has been missed.',
  email: 'Invalid email address.',
  phoneNumber: 'Invalid phone number.',
  zipCode: 'Invalid zip code.',
  accountNumber: 'Invalid account number.',
  accountSecurityCode: 'Invalid security code.',
};

export const formStepLabels = Object.keys(FormStepEnum).filter((k) => isNaN(Number(k)));

export const mockFormValues = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  phoneNumber: '1234567890',
  accountHolderName: 'John Doe',
  accountNumber: '1234567890123456',
  accountExpirationDate: dayjs(),
  accountSecurityCode: '123',
  deliveryType: deliveryTypeOptions[1],
  deliveryCarrier: deliveryCarrierOptions[1],
  deliveryAddress: '123 Main St',
  deliveredCity: 'New York',
  deliveredCountry: 'USA',
  deliveryAddressZipCode: '12345',
};
