
const revenueRepository = require('../repositories/revenue.repository');
const expenseRepository = require('../repositories/expense.repository');

exports.read = async (data) => {
  console.log('read service...');
  const dashValues = {
    revenues: {},
    totalRevenues: 0,
    expenses: {},
    totalExpenses: 0,
  };

  const [
    revenues,
    expenses
  ] = await Promise.all([
    revenueRepository.read(data),
    expenseRepository.read(data)
  ]);

  if (revenues && Array.isArray(revenues)) {
    for (let revenue of revenues) {
      if (!dashValues['revenues'][revenue['description']])
        dashValues['revenues'][revenue['description']] = 0;

      dashValues['revenues'][revenue['description']] += revenue['value'] || 0;
      dashValues['totalRevenues'] += revenue['value'] || 0;
    }
  }

  if (expenses && Array.isArray(expenses)) {
    for (let expense of expenses) {
      if (!dashValues['expenses'][expense['description']])
        dashValues['expenses'][expense['description']] = 0;

      dashValues['expenses'][expense['description']] += expense['value'] || 0;
      dashValues['totalExpenses'] += expense['value'] || 0;
    }
  }

  return dashValues;
};

