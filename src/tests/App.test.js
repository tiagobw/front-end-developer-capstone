import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import BookingPage from '../pages/BookingPage';

it('renders the "Little Lemon" heading', async () => {
  const routes = [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/booking',
      element: <BookingPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/booking'],
    initialIndex: 0,
  });

  // Mocking methods which are not implemented in JSDOM
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<RouterProvider router={router} />);
  const headingElement = await screen.findByText(/little lemon/i);
  expect(headingElement).toBeInTheDocument();
});
