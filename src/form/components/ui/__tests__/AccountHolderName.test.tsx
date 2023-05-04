import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { AccountHolderNameInput } from '../AccountHolderNameInput';

describe('AccountHolderNameInput', () => {
  beforeEach(() => render(<AccountHolderNameInput />));

  const accountHolderNameInput = () => screen.getByLabelText('Account Holder Name');

  it('should render', () => {
    expect(accountHolderNameInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(accountHolderNameInput(), { target: { value: 'John Doe' } });
    });
    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
  });
});
