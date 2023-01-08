import { render, screen } from '@testing-library/react';

import BookingForm from '../../components/BookingForm';

describe('BookingForm', () => {
  it('renders the "choose date" label', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  });
});
