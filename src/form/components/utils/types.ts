import dayjs from 'dayjs';

export interface FormContextType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  deliveryType: string;
  deliveryCarrier: string;
  deliveryAddress: string;
  deliveryAddressZipCode: string;
  deliveredCountry: string;
  deliveredCity: string;
  accountHolderName: string;
  accountNumber: string;
  accountExpirationDate: dayjs.Dayjs | null;
  accountSecurityCode: string;
}
