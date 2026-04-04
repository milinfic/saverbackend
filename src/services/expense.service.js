
const expense = require('../repositories/expense.repository');

exports.read = async (data, clientId) => {
  console.log('read service...');

  const returnValues = await expense.read(data, clientId);
  
  return returnValues;
};

<<<<<<< HEAD
exports.readById = async (id, clientId) => {
  console.log('readById service...');

  const returnValues = await expense.readById(id, clientId);
=======
exports.readById = async (data) => {
  console.log('read service...');

  const returnValues = await expense.readById(data);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  
  return returnValues;
};

<<<<<<< HEAD
exports.create = async (data, clientId) => {
  console.log('create service...', data);

  const returnValues = await expense.create(data, clientId);
=======
exports.create = async (data) => {
  console.log('create service...', data);

  const returnValues = await expense.create(data);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  
  return returnValues;
};

<<<<<<< HEAD
exports.update = async (id, data, clientId) => {
  console.log('update service...');  

  const returnValues = await expense.update(id, data, clientId);
=======
exports.update = async (id, data) => {
  console.log('update service...');  

  const returnValues = await expense.update(id, data);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  
  return returnValues;
};

<<<<<<< HEAD
exports.delete = async (id, clientId) => {
  console.log('delete service...');

  await expense.delete(id, clientId);
=======
exports.delete = async (id) => {
  console.log('delete service...');

  await expense.delete(id);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  
  return id;
};

