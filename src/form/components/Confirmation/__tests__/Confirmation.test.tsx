import { fireEvent, screen, within } from '@testing-library/react';

import { mockFormValues } from '../../utils/constants';
import { render } from '../../utils/helpers';
import { Confirmation } from '..';

describe('Confirmation', () => {
  const handlePrevStep = jest.fn();
  const submitButton = () => screen.getByRole('button', { name: 'Submit' });
  const prevButton = () => screen.getByRole('button', { name: 'Previous' });

  beforeEach(() => {
    render(<Confirmation handlePrevStep={handlePrevStep} />, mockFormValues);
  });

  it('should render title', () => {
    expect(screen.getByText('Confirmation')).toBeInTheDocument();
  });

  it('should render firstName label and value', () => {
    const row = within(screen.getByTestId('First Name'));
    expect(row.getByText('First Name:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.firstName)).toBeInTheDocument();
  });

  it('should render lastName label and value', () => {
    const row = within(screen.getByTestId('Last Name'));
    expect(row.getByText('Last Name:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.lastName)).toBeInTheDocument();
  });

  it('should render email label and value', () => {
    const row = within(screen.getByTestId('Email'));
    expect(row.getByText('Email:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.email)).toBeInTheDocument();
  });

  it('should render phoneNumber label and value', () => {
    const row = within(screen.getByTestId('Phone Number'));
    expect(row.getByText('Phone Number:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.phoneNumber)).toBeInTheDocument();
  });

  it('should render deliveryType label and value', () => {
    const row = within(screen.getByTestId('Delivery Type'));
    expect(row.getByText('Delivery Type:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.deliveryType)).toBeInTheDocument();
  });

  it('should render deliveryCarrier label and value', () => {
    const row = within(screen.getByTestId('Delivery Carrier'));
    expect(row.getByText('Delivery Carrier:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.deliveryCarrier)).toBeInTheDocument();
  });

  it('should render deliveredCountry label and value', () => {
    const row = within(screen.getByTestId('Country'));
    expect(row.getByText('Country:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.deliveredCountry)).toBeInTheDocument();
  });

  it('should render deliveredCity label and value', () => {
    const row = within(screen.getByTestId('City'));
    expect(row.getByText('City:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.deliveredCity)).toBeInTheDocument();
  });

  it('should render deliveryAddress label and value', () => {
    const row = within(screen.getByTestId('Delivery Address'));
    expect(row.getByText('Delivery Address:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.deliveryAddress)).toBeInTheDocument();
  });

  it('should render deliveryAddressZipCode label and value', () => {
    const row = within(screen.getByTestId('Zip Code'));
    expect(row.getByText('Zip Code:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.deliveryAddressZipCode)).toBeInTheDocument();
  });

  it('should render accountHolderName label and value', () => {
    const row = within(screen.getByTestId('Account Holder'));
    expect(row.getByText('Account Holder:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.accountHolderName)).toBeInTheDocument();
  });

  it('should render accountNumber label and value', () => {
    const row = within(screen.getByTestId('Account Number'));
    expect(row.getByText('Account Number:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.accountNumber)).toBeInTheDocument();
  });

  it('should render accountExpirationDate label and value', () => {
    const row = within(screen.getByTestId('Expiration Date'));
    expect(row.getByText('Expiration Date:')).toBeInTheDocument();
    expect(
      row.getByText(mockFormValues.accountExpirationDate.format('MM/YYYY'))
    ).toBeInTheDocument();
  });

  it('should render accountSecurityCode label and value', () => {
    const row = within(screen.getByTestId('CVC'));
    expect(row.getByText('CVC:')).toBeInTheDocument();
    expect(row.getByText(mockFormValues.accountSecurityCode)).toBeInTheDocument();
  });

  it('should render next button', () => {
    expect(submitButton()).toBeInTheDocument();
  });

  it('should render prev button', () => {
    expect(prevButton()).toBeInTheDocument();
  });

  it('should render prev button enabled', () => {
    expect(submitButton()).toBeEnabled();
  });

  it('should render prev button enabled', () => {
    expect(prevButton()).toBeEnabled();
  });

  it('should call prev button when it is clicked', () => {
    fireEvent.click(prevButton());
    expect(handlePrevStep).toHaveBeenCalledTimes(1);
  });
});
