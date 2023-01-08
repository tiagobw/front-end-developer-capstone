import { useReducer } from 'react';

import BookingForm from '../components/BookingForm';
import PageLayout from '../components/PageLayout';

export const initializeTimes = () => [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

export function updateTimes(state, action) {
  console.log('action:', action);
  switch (action.type) {
    case 'update':
      return [...state];
    default:
      throw new Error();
  }
}

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <PageLayout>
      <BookingForm availableTimes={state} dispatch={dispatch} />
    </PageLayout>
  );
};

export default BookingPage;
