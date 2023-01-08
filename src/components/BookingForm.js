import { useState } from 'react';
import { formatDate } from '../utils/formatDate';

const BookingForm = () => {
  const formattedTodayDate = formatDate(new Date());
  const [date, setDate] = useState(formattedTodayDate);
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  const [time, setTime] = useState('17:00');
  const [guestsNumber, setGuestsNumber] = useState('1');
  const [occasion, setOccasion] = useState('birthday');
  const reservationDateId = 'res-date';
  const reservationTimeId = 'res-time';
  const guestsId = 'guests';
  const occasionId = 'occasion';
  const mapInputNameToSetState = {
    [reservationDateId]: setDate,
    [reservationTimeId]: setTime,
    [guestsId]: setGuestsNumber,
    [occasionId]: setOccasion,
  };

  const handleChange = (e) => {
    mapInputNameToSetState[e.target.id](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      <label htmlFor='res-date'>Choose date</label>
      <input
        value={date}
        onChange={handleChange}
        type='date'
        id={reservationDateId}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select value={time} onChange={handleChange} id={reservationTimeId}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        value={guestsNumber}
        onChange={handleChange}
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id={guestsId}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select value={occasion} onChange={handleChange} id={occasionId}>
        <option value='birthday'>Birthday</option>
        <option value='anniversary'>Anniversary</option>
      </select>
      <input type='submit' value='Make Your reservation' />
    </form>
  );
};

export default BookingForm;
