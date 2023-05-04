import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../../utils/helpers';
import { DeliveryCityInput } from '../DeliveryCityInput';

describe('DeliveryCityInput', () => {
  beforeEach(() => render(<DeliveryCityInput />));

  const deliveryCityInput = () => screen.getByLabelText('City');

  it('should render', () => {
    expect(deliveryCityInput()).toBeInTheDocument();
  });

  it('should change value', () => {
    act(() => {
      fireEvent.change(deliveryCityInput(), { target: { value: 'Baku' } });
    });
    expect(screen.getByDisplayValue('Baku')).toBeInTheDocument();
  });
});
