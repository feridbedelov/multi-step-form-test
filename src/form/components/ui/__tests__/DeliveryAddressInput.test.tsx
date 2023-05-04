import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { DeliveryAddressInput } from '../DeliveryAddressInput';

describe('DeliveryAddressInput', () => {
  beforeEach(() => render(<DeliveryAddressInput />));

  const deliveryAddressInput = () => screen.getByLabelText('Delivery Address');

  it('should render', () => {
    expect(deliveryAddressInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(deliveryAddressInput(), { target: { value: 'Jump Street 21' } });
    });
    expect(screen.getByDisplayValue('Jump Street 21')).toBeInTheDocument();
  });
});
