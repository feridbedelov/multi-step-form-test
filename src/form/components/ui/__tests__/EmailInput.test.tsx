import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { EmailInput } from '../EmailInput';

describe('EmailInput', () => {
  beforeEach(() => render(<EmailInput />));

  const emailInput = () => screen.getByLabelText('Email');

  it('should render', () => {
    expect(emailInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(emailInput(), { target: { value: 'johndoe1@gmail.com' } });
    });
    expect(screen.getByDisplayValue('johndoe1@gmail.com')).toBeInTheDocument();
  });
});
