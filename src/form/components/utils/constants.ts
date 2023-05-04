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
