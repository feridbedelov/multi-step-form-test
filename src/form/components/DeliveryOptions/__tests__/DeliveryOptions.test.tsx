import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { DeliveryOptions } from '..';

describe('DeliveryOptions', () => {
  const handleNextStep = jest.fn();
  const handlePrevStep = jest.fn();
  const nextButton = () => screen.getByRole('button', { name: 'Next' });
  const prevButton = () => screen.getByRole('button', { name: 'Previous' });

  beforeEach(() => {
    render(<DeliveryOptions handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />);
  });

  it('should render title', () => {
    expect(screen.getByText('Delivery Options')).toBeInTheDocument();
  });

  it('should render form fields', () => {
    expect(screen.getByLabelText('Delivery Type')).toBeInTheDocument();
    expect(screen.getByLabelText('Delivery Carrier')).toBeInTheDocument();
    expect(screen.getByLabelText('Delivery Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('ZIP Code')).toBeInTheDocument();
  });

  it('should render next button', () => {
    expect(nextButton()).toBeInTheDocument();
  });

  it('should render prev button', () => {
    expect(prevButton()).toBeInTheDocument();
  });

  it('should disable next button when form is not touched', () => {
    expect(nextButton()).toBeDisabled();
  });

  it('should render prev button enabled', () => {
    expect(prevButton()).toBeEnabled();
  });

  it('should call prev button when it is clicked', () => {
    fireEvent.click(prevButton());
    expect(handlePrevStep).toHaveBeenCalledTimes(1);
  });
});
