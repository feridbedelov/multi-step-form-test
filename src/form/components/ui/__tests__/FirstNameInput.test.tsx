import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { FirstNameInput } from '../FirstNameInput';

describe('FirstNameInput', () => {
  beforeEach(() => render(<FirstNameInput />));

  const firstNameInput = () => screen.getByRole('textbox');

  it('should render', () => {
    expect(firstNameInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.input(firstNameInput(), { target: { value: 'John' } });
    });
    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  });
});
