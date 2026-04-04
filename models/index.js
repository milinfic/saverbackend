const Expense = require('./expense');
const ExpenseGroup = require('./expense-group');
const ExpenseType = require('./expense-type');
const Revenue = require('./revenue');
const RevenueGroup = require('./revenue-group');
const RevenueType = require('./revenue-type');
const Users = require('./users.model');

const DB = {
  ExpenseGroup,
  ExpenseType,
  Expense,
  Revenue,
  RevenueGroup,
  RevenueType,
  Users
};

module.exports = DB;