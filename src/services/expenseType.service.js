
const expenseType = require('../repositories/expense-type.repository');

exports.read = async (data) => {
  console.log('read service...');

  const returnValues = await expenseType.read(data);
  
  return returnValues;
};

exports.readById = async (data) => {
  console.log('read service...');

  const returnValues = await expenseType.readById(data);
  
  return returnValues;
};

exports.create = async (data) => {
  console.log('create service...', data);

  const returnValues = await expenseType.create(data);
  
  return returnValues;
};

exports.update = async (id, data) => {
  console.log('update service...');  

  const returnValues = await expenseType.update(id, data);
  
  return returnValues;
};

exports.delete = async (id) => {
  console.log('delete service...');

  await expenseType.delete(id);
  
  return id;
};

