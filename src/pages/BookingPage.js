import { useReducer } from 'react';

import BookingForm from '../components/BookingForm';
import PageLayout from '../components/PageLayout';

// eslint-disable-next-line no-undef
export const initializeTimes = () => fetchAPI(new Date());

export function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      // eslint-disable-next-line no-undef
      return fetchAPI(action.payload);
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
