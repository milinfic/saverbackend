
const revenue = require('../repositories/revenue-type.repository');

exports.read = async (data, clientId) => {

  const returnValues = await revenue.read(data, clientId);

  return returnValues;
};

exports.readById = async (id, clientId) => {

  const returnValues = await revenue.readById(id, clientId);
  
  return returnValues;
};

exports.create = async (data, clientId) => {
  const formatedData = {
    name: data?.name || null,
    
    revenue_group_id: data?.revenue_group_id || null,
    
    date: new Date()
  }

  const returnValues = await revenue.create(formatedData, clientId);

  return returnValues;
};

exports.update = async (id, data, clientId) => {
  const formatedData = {
    name: data?.name || null,        
    revenue_group_id: data?.revenue_group_id || null
  }

  const returnValues = await revenue.update(id, formatedData, clientId);

  return returnValues;
};

exports.delete = async (id, clientId) => {

  await revenue.delete(id, clientId);
  
  return id;
};

