const DB = require('../../models/index');

exports.read = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const revenueGroups = await DB.RevenueGroup.query(safeClientId)
      .orderBy(`revenue_group_${safeClientId}.name`);

    return revenueGroups;

  } catch (error) {
    console.log(error.message);
    return {error:true};
  }
};

exports.readById = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const revenueGroups = await DB.RevenueGroup.query(safeClientId)
      .where('id', id)
      .first();

    return revenueGroups;

  } catch (error) {
    console.log(error.message);
    return {error:true};
  }
};

exports.create = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    data['date'] = new Date();

    const created = await DB.RevenueGroup.query(safeClientId)
      .insert(data);

    return created;

  } catch (error) {
    console.log(error.message);
    return {
      error: true
    }
  }
};

exports.update = async (id, data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const updated = await DB.RevenueGroup.query(safeClientId)
      .update(data)
      .where(`revenue_group_${safeClientId}.id`, id);

    return updated;

  } catch (error) {
    console.log(error.message);
    return {
      error: true
    }
  }
};

exports.delete = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const deleted = await DB.RevenueGroup.query(safeClientId)
      .delete()
      .where(`revenue_group_${safeClientId}.id`, id);

    return deleted ;
  } catch (error) {
    console.log(error.message);
    return {
      error: true
    }
  }
};