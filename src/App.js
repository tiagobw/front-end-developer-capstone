import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/booking',
    element: <BookingPage />,
  },
  {
    path: '/confirmed-booking',
    element: <ConfirmedBookingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
