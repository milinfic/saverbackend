const revenueGroup = require('../repositories/revenueGroup.repository');

exports.read = async (data, clientId) => {
  const returnValues = await revenueGroup.read(data, clientId);

  return returnValues;
};

exports.readById = async (data, clientId) => {

  const returnValues = await revenueGroup.readById(data, clientId);

  return returnValues;
};

exports.create = async (data, clientId) => {
  console.log('create service...', data);

  const returnValues = await revenueGroup.create(data, clientId);

  return returnValues;
};

exports.update = async (id, data, clientId) => {
  console.log('update service...');

  const returnValues = await revenueGroup.update(id, data, clientId);

  return returnValues;
};

exports.delete = async (id, clientId) => {
  console.log('delete service...');

  await revenueGroup.delete(id, clientId);

  return id;
};