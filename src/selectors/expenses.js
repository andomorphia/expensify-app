import moment from 'moment';

export default (expenses, {
  text,
  sortBy,
  startDate,
  endDate,
}) => expenses.filter((expense) => {
  const createdAtMoment = moment(expense.createdAt);
  const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  const sortCriteria = sortBy === 'date' ? 'createdAt' : sortBy;

  return a[sortCriteria] < b[sortCriteria] ? 1 : -1;
});

