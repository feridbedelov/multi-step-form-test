import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { AccountSecurityCodeInput } from '../AccountSecurityCodeInput';

describe('AccountSecurityCodeInput', () => {
  beforeEach(() => render(<AccountSecurityCodeInput />));

  const accountSecurityCodeInput = () => screen.getByLabelText('CVC');

  it('should render', () => {
    expect(accountSecurityCodeInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(accountSecurityCodeInput(), { target: { value: '123' } });
    });
    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });
});
