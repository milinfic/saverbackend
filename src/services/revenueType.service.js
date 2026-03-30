
const revenue = require('../repositories/revenue-type.repository');

exports.read = async (data, clientId) => {
  console.log('read service revenue type...');

  const returnValues = await revenue.read(data, clientId);
  
  return returnValues;
};

exports.readById = async (data, clientId) => {
  console.log('read service...');

  const returnValues = await revenue.readById(data, clientId);
  
  return returnValues;
};

exports.create = async (data, clientId) => {
  const formatedData = {
    name: data?.name || null,
    column: data?.column || null,
    date: new Date()
  }

  const returnValues = await revenue.create(formatedData, clientId);
  
  return returnValues;
};

exports.update = async (id, data, clientId) => {
  const formatedData = {
    name: data?.name || null,
    column: data?.column || null
  }

  const returnValues = await revenue.update(id, formatedData, clientId);
  
  return returnValues;
};

exports.delete = async (id, clientId) => {
  console.log('delete service...');

  await revenue.delete(id, clientId);
  
  return id;
};

