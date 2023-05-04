import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { LastNameInput } from '../LastNameInput';

describe('LastNameInput', () => {
  beforeEach(() => render(<LastNameInput />));

  const lastNameInput = () => screen.getByLabelText('Last Name');

  it('should render', () => {
    expect(lastNameInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(lastNameInput(), { target: { value: 'Doe' } });
    });
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
  });
});
