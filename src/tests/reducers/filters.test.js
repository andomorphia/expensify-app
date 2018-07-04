import moment from 'moment';

import filtersReducer from '../../reducers/filters';

describe('filtersReducer (default values): ', () => {
  test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    });
  });
});

describe('filtersReducer (SORT_BY_AMOUNT): ', () => {
  test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
  });
});

describe('filtersReducer (SORT_BY_DATE): ', () => {
  test('should set sortBy to date', () => {
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined,
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });

    expect(state.sortBy).toBe('date');
  });
});

describe('filtersReducer (SET_TEXT_FILTER): ', () => {
  test('should set text filter to provided value', () => {
    const text = 'Some text';
    const action = {
      type: 'SET_TEXT_FILTER',
      text,
    };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
  });
});

describe('filtersReducer (SET_START_DATE): ', () => {
  test('should set start date filter to provided value', () => {
    const startDate = moment().startOf('month');
    const action = {
      type: 'SET_START_DATE',
      startDate,
    };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
  });
});

describe('filtersReducer (SET_END_DATE): ', () => {
  test('should set end date filter to provided value', () => {
    const endDate = moment().endOf('month');
    const action = {
      type: 'SET_END_DATE',
      endDate,
    };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
  });
});
