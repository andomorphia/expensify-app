import moment from 'moment';

import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from '../../actions/filters';

describe('setStartDate: ', () => {
  test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0),
    });
  });
});

describe('setEndDate: ', () => {
  test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0),
    });
  });
});

describe('setTextFilter (provided value): ', () => {
  test('should generate setTextFilter action object with provided value', () => {
    const text = 'Some text';
    const action = setTextFilter(text);

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text,
    });
  });
});

describe('setTextFilter (default value): ', () => {
  test('should generate setTextFilter action object with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: '',
    });
  });
});

describe('sortByAmount: ', () => {
  test('should generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
  });
});

describe('sortByDate: ', () => {
  test('should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
  });
});
