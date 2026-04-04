
const revenue = require('../repositories/revenue-type.repository');

exports.read = async (data, clientId) => {

  const returnValues = await revenue.read(data, clientId);
<<<<<<< HEAD

  return returnValues;
};

exports.readById = async (id, clientId) => {

  const returnValues = await revenue.readById(id, clientId);

=======
  
  return returnValues;
};

exports.readById = async (data, clientId) => {

  const returnValues = await revenue.readById(data, clientId);
  
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  return returnValues;
};

exports.create = async (data, clientId) => {
  const formatedData = {
    name: data?.name || null,
<<<<<<< HEAD
    revenue_group_id: data?.revenue_group_id || null,
=======
    column: data?.column || null,
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
    date: new Date()
  }

  const returnValues = await revenue.create(formatedData, clientId);
<<<<<<< HEAD

=======
  
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  return returnValues;
};

exports.update = async (id, data, clientId) => {
  const formatedData = {
    name: data?.name || null,
<<<<<<< HEAD
    revenue_group_id: data?.revenue_group_id || null
  }

  const returnValues = await revenue.update(id, formatedData, clientId);

=======
    column: data?.column || null
  }

  const returnValues = await revenue.update(id, formatedData, clientId);
  
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  return returnValues;
};

exports.delete = async (id, clientId) => {

  await revenue.delete(id, clientId);
<<<<<<< HEAD

=======
  
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  return id;
};

