import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { DeliveryCountryInput } from '../DeliveryCountryInput';

describe('DeliveryCountryInput', () => {
  beforeEach(() => render(<DeliveryCountryInput />));

  const deliveryCountryInput = () => screen.getByLabelText('Country');

  it('should render', () => {
    expect(deliveryCountryInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(deliveryCountryInput(), { target: { value: 'Azerbaijan' } });
    });
    expect(screen.getByDisplayValue('Azerbaijan')).toBeInTheDocument();
  });
});
