import { screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { PersonalInformation } from '..';

describe('PersonalInfo', () => {
  const handleNextStep = jest.fn();
  const nextButton = () => screen.getByRole('button', { name: 'Next' });

  beforeEach(() => {
    render(<PersonalInformation handleNextStep={handleNextStep} />);
  });

  it('should render title', () => {
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('should render form fields', () => {
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
  });

  it('should render next button', () => {
    expect(nextButton()).toBeInTheDocument();
  });

  it('should disable next button when form is not touched', () => {
    expect(nextButton()).toBeDisabled();
  });
});
