import { fireEvent, screen } from '@testing-library/react';

import { deliveryCarrierOptions } from '../../utils/constants';
import { render } from '../../utils/helpers';
import { DeliveryCarrierDropdown } from '../DeliveryCarrierDropdown';

describe('DeliveryCarrierDropdown', () => {
  beforeEach(() => render(<DeliveryCarrierDropdown />));

  const deliveryCarrierDropdown = () => screen.getByLabelText('Delivery Carrier');

  it('should render', () => {
    expect(deliveryCarrierDropdown()).toBeInTheDocument();
  });

  it('should render with default value', () => {
    expect(screen.getByDisplayValue(deliveryCarrierOptions[0])).toBeInTheDocument();
  });

  it('should change value', () => {
    const arrow = screen.getByTestId('ArrowDropDownIcon');
    fireEvent.mouseDown(screen.getByRole('button'));
    fireEvent.click(arrow);
    fireEvent.click(screen.getByRole('option', { name: deliveryCarrierOptions[1] }));
    fireEvent.click(arrow);
    expect(screen.getByDisplayValue(deliveryCarrierOptions[1])).toBeInTheDocument();
  });
});
