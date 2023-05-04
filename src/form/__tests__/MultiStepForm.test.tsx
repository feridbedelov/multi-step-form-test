import { render, screen, within } from '@testing-library/react';

import { formStepLabels } from '../components/utils/constants';
import { MultiStepForm } from '..';

describe('MultiStepForm', () => {
  const stepper = () => screen.getByTestId('stepper-container');

  beforeEach(() => {
    render(<MultiStepForm />);
  });

  it('should render stepper', () => {
    expect(stepper()).toBeInTheDocument();
  });

  it('should render each step title in stepper', () => {
    formStepLabels.forEach((step) => {
      expect(within(stepper()).getByText(step)).toBeInTheDocument();
    });
  });

  it('should render first step by default', () => {
    expect(screen.getAllByText('Personal Information')).toHaveLength(2);
  });
});
