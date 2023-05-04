import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { AccountExpirationDateInput } from '../AccountExpirationInput';

describe('AccountExpirationDateInput', () => {
  beforeEach(() => render(<AccountExpirationDateInput />));

  const accountExpirationDateInput = () => screen.getByLabelText('Expiration Date');

  it('should render', () => {
    expect(accountExpirationDateInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(accountExpirationDateInput(), { target: { value: '01/2027' } });
    });
    expect(screen.getByDisplayValue('01/2027')).toBeInTheDocument();
  });
});
