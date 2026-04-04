
const expense = require('../repositories/expenseGroup.repository');

exports.read = async (data, clientId) => {
  const returnValues = await expense.read(data, clientId);
  
  return returnValues;
};

exports.readById = async (data, clientId) => {

  const returnValues = await expense.readById(data, clientId);
  
  return returnValues;
};

exports.create = async (data, clientId) => {
  console.log('create service...', data);

  const returnValues = await expense.create(data, clientId);
  
  return returnValues;
};

exports.update = async (id, data) => {
  console.log('update service...');  

  const returnValues = await expense.update(id, data);
  
  return returnValues;
};

exports.delete = async (id) => {
  console.log('delete service...');

  await expense.delete(id);
  
  return id;
};

