import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, allFilters } from '../fixtures/filters';

let setTextFilter;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;
let wrapper;

// Code to run before each test
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

describe('ExpenseListFilters component rendering: ', () => {
  test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpenseListFilters component rendering (alt data): ', () => {
  test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
      filters: allFilters,
    });

    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpenseListFilters component (setTextFilter): ', () => {
  test('should handle setTextFilter', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: { value },
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });
});

describe('ExpenseListFilters component (sortByDate): ', () => {
  test('should handle sortByDate', () => {
    const value = 'date';
    // Set props so that sortBy = 'amount'
    wrapper.setProps({
      filters: allFilters,
    });
    wrapper.find('select').simulate('change', {
      target: { value },
    });

    expect(sortByDate).toHaveBeenCalled();
  });
});

describe('ExpenseListFilters component (sortByAmount): ', () => {
  test('should handle sortByAmount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: { value },
    });

    expect(sortByAmount).toHaveBeenCalled();
  });
});

describe('ExpenseListFilters component (setStartDate): ', () => {
  test('should handle setStartDate', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });
});

describe('ExpenseListFilters component (set calendarFocused): ', () => {
  test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
});
