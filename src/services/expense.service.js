
const expense = require('../repositories/expense.repository');

exports.read = async (data) => {
  console.log('read service...');

  const returnValues = await expense.read(data);
  
  return returnValues;
};

exports.readById = async (data) => {
  console.log('read service...');

  const returnValues = await expense.readById(data);
  
  return returnValues;
};

exports.create = async (data) => {
  console.log('create service...', data);

  const returnValues = await expense.create(data);
  
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

