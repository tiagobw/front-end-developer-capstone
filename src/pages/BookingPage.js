import { useReducer } from 'react';

import BookingForm from '../components/BookingForm';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // eslint-disable-next-line no-undef
    if (submitAPI(formData)) {
      console.log('formData:', formData)
      navigate('/confirmed-booking');
    }
  };

  return (
    <PageLayout>
      <BookingForm
        onSubmit={submitForm}
        availableTimes={state}
        dispatch={dispatch}
      />
    </PageLayout>
  );
};

export default BookingPage;
