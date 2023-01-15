import { initializeTimes, updateTimes } from '../../pages/BookingPage';
import * as importedObject from '../../pages/BookingPage';

describe('BookingPage', () => {
  describe('initializeTimes', () => {
    it('returns ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]', () => {
      // arrange
      importedObject.initializeTimes = jest.fn(() => [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ]);
      const sut = initializeTimes;
      const expected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

      // act
      const actual = sut();

      // assert
      expect(actual).toEqual(expected);
    });
  });

  describe('updateTimes', () => {
    it('returns the same value as its state parameter', () => {
      // arrange
      const fetchAPI = (date) => [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ];
      importedObject.updateTimes = jest.fn((state, action) => {
        switch (action.type) {
          case 'update':
            return fetchAPI(action.payload);
          default:
            throw new Error();
        }
      });
      const sut = updateTimes;
      const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const action = {
        type: 'update',
        payload: '2023-01-08',
      };
      const expected = state;

      // act
      const actual = sut(state, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
