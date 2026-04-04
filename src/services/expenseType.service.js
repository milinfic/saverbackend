
const expenseTypeRepository = require('../repositories/expenseType.repository');
const expenseGroupRepository = require('../repositories/expenseGroup.repository');

exports.read = async (data, clientId) => {
  const returnValues = await expenseTypeRepository.read(data, clientId);

  return returnValues;
};

exports.readById = async (data, clientId) => {
  const returnValues = await expenseTypeRepository.readById(data, clientId);

  return returnValues;
};

exports.create = async (data, clientId) => {
  try {

    const dataFormatted = await setDataFormatted(
      data,
      clientId
    );

    const created = await expenseTypeRepository.create(
      dataFormatted,
      clientId
    );

    return created;

  } catch (error) {
    console.log(error.message);
    return {
      error: true,
      message: error.message
    }
  }
};

exports.update = async (id, data, clientId) => {
  try {

    const dataFormatted = await setDataFormatted(data, clientId);

    const returnValues = await expenseTypeRepository.update(
      id,
      dataFormatted,
      clientId
    );

    return returnValues;

  } catch (error) {
    console.log(error.message);
    return {
      error: true,
      message: error.message
    }
  }

};

async function setDataFormatted(data, clientId) {
  return {
    name: data.name
  }
}

exports.delete = async (id, clientId) => {
  const deleted = await expenseTypeRepository.delete(id, clientId);

  return deleted;
};

