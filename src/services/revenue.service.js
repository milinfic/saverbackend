
const revenue = require('../repositories/revenue.repository');
const revenueType = require('../repositories/revenue-type.repository');

exports.read = async (data, clientId) => {

  const returnValues = await revenue.read(data, clientId);
  
  return returnValues;
};

exports.readById = async (data, clientId) => {
  const returnValues = await revenue.readById(data, clientId);
  
  return returnValues;
};

exports.create = async (data, clientId) => {
  const type = await revenueType.readById(data?.revenue_type_id, clientId);
  
  const toInsert = {
    description: data.description || '',
    revenue_type_id: type.id,
    value: data.value || '',
    date: new Date()
  }

  const returnValues = await revenue.create(toInsert, clientId);
  
  return returnValues;
};

exports.update = async (id, clientId, data) => {

  console.log(data);
  const type = await revenueType.readById(data?.revenue_type_id, clientId);
  
  const toUpdate = {
    description: data.description || '',
    revenue_type_id: type.id,
    value: data.value || ''
  }

  const returnValues = await revenue.update(id, clientId, toUpdate);
  
  return returnValues;
};

exports.delete = async (id, clientId) => {

  await revenue.delete(id, clientId);
  
  return id;
};

