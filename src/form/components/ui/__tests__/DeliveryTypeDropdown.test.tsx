import { fireEvent, screen } from '@testing-library/react';

import { deliveryTypeOptions } from '../../utils/constants';
import { render } from '../../utils/helpers';
import { DeliveryTypeDropdown } from '../DeliveryTypeDropdown';

describe('DeliveryTypeDropdown', () => {
  beforeEach(() => render(<DeliveryTypeDropdown />));

  const deliveryTypeDropdown = () => screen.getByLabelText('Delivery Type');

  it('should render', () => {
    expect(deliveryTypeDropdown()).toBeInTheDocument();
  });

  it('should render with default value', () => {
    expect(screen.getByDisplayValue(deliveryTypeOptions[0])).toBeInTheDocument();
  });

  it('should change value', () => {
    const arrow = screen.getByTestId('ArrowDropDownIcon');
    fireEvent.mouseDown(screen.getByRole('button'));
    fireEvent.click(arrow);
    fireEvent.click(screen.getByRole('option', { name: deliveryTypeOptions[1] }));
    fireEvent.click(arrow);
    expect(screen.getByDisplayValue(deliveryTypeOptions[1])).toBeInTheDocument();
  });
});
