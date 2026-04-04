
const expense = require('../repositories/expense.repository');

exports.read = async (data, clientId) => {
  console.log('read service...');

  const returnValues = await expense.read(data, clientId);
  
  return returnValues;
};

exports.readById = async (id, clientId) => {
  console.log('readById service...');

  const returnValues = await expense.readById(id, clientId);
    
  return returnValues;
};

exports.create = async (data, clientId) => {
  console.log('create service...', data);

  const returnValues = await expense.create(data, clientId);  
  
  return returnValues;
};

exports.update = async (id, data, clientId) => {

  const returnValues = await expense.update(id, data, clientId);

  return returnValues;
};

exports.delete = async (id, clientId) => {
  console.log('delete service...');

  await expense.delete(id, clientId);
  
  return id;
};

