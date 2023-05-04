import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { PaymentOptions } from '..';

describe('PaymentOptions', () => {
  const handleNextStep = jest.fn();
  const handlePrevStep = jest.fn();
  const nextButton = () => screen.getByRole('button', { name: 'Next' });
  const prevButton = () => screen.getByRole('button', { name: 'Previous' });

  beforeEach(() => {
    render(<PaymentOptions handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />);
  });

  it('should render title', () => {
    expect(screen.getByText('Payment Options')).toBeInTheDocument();
  });

  it('should render form fields', () => {
    expect(screen.getByLabelText('Account Holder Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Account Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Expiration Date')).toBeInTheDocument();
    expect(screen.getByLabelText('CVC')).toBeInTheDocument();
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
