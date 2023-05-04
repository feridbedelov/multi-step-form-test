import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { DeliveryAddressZipCodeInput } from '../DeliveryAddressZipCodeInput';

describe('DeliveryAddressZipCodeInput', () => {
  beforeEach(() => render(<DeliveryAddressZipCodeInput />));

  const deliveryAddressZipCodeInput = () => screen.getByLabelText('ZIP Code');

  it('should render', () => {
    expect(deliveryAddressZipCodeInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(deliveryAddressZipCodeInput(), { target: { value: '1141' } });
    });
    expect(screen.getByDisplayValue('1141')).toBeInTheDocument();
  });
});
