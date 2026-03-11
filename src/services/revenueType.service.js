
const revenue = require('../repositories/revenue-type.repository');

exports.read = async (data) => {
  console.log('read service revenue type...');

  const returnValues = await revenue.read(data);
  
  return returnValues;
};

exports.readById = async (data) => {
  console.log('read service...');

  const returnValues = await revenue.readById(data);
  
  return returnValues;
};

exports.create = async (data) => {
  console.log('create service...', data);

  const returnValues = await revenue.create(data);
  
  return returnValues;
};

exports.update = async (id, data) => {
  console.log('update service...');  

  const returnValues = await revenue.update(id, data);
  
  return returnValues;
};

exports.delete = async (id) => {
  console.log('delete service...');

  await revenue.delete(id);
  
  return id;
};

