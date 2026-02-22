
const expenseType = require('../repositories/expense-type.repository');

exports.read = async (data) => {
  console.log('read service...');

  const returnValues = await expenseType.read(data);
  
  return returnValues;
};

exports.create = async (data) => {
  console.log('create service...', data);

  const returnValues = await expenseType.create(data);
  
  return returnValues;
};

exports.update = async (data) => {
  console.log('update service...');
  
  return data;
};

exports.delete = async (data) => {
  console.log('delete service...');
  
  return data;
};

