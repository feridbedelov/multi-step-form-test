import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { PhoneNumberInput } from '../PhoneNumberInput';

describe('PhoneNumberInput', () => {
  beforeEach(() => render(<PhoneNumberInput />));

  const phoneNumberInput = () => screen.getByLabelText('Phone Number');

  it('should render', () => {
    expect(phoneNumberInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(phoneNumberInput(), { target: { value: '1241241' } });
    });
    expect(screen.getByDisplayValue('1241241')).toBeInTheDocument();
  });
});
