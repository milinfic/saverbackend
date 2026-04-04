const DB = require('../../models/index');

exports.read = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const types = await DB.RevenueType.query(safeClientId)
      .select([
        `revenue_type_${safeClientId}.*`
      ])
      .orderBy(`revenue_type_${safeClientId}.name`);

    return types;
  } catch (err) {
    console.error('Erro ao ler revenue_type:', err);
    return [];
  }
};

exports.readById = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const type = await DB.RevenueType.query(safeClientId)
      .select([
        `revenue_type_${safeClientId}.*`,
        `revenue_group_${safeClientId}.name as group_name`
      ])
      .join(
        `revenue_group_${safeClientId}`,
        `revenue_group_${safeClientId}.id`,
        '=',
        `revenue_type_${safeClientId}.revenue_group_id`
      )
      .where(`revenue_type_${safeClientId}.id`, id)
      .first();

    return type;

  } catch (error) {
    console.log('error readById revenue-type-repository: ', error.message);
    return null;
  }
};

exports.create = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const created = await DB.RevenueType.query(safeClientId)
      .insert(data)
      .returning('*');

    return created[0] || null;

  } catch (error) {
    console.log('error create revenue-type-repository: ', error.message);
    return null;
  }
};

exports.update = async (id, data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const updated = await DB.RevenueType.query(safeClientId)
      .update(data)
      .where('id', id)
      .returning('*');

    return updated[0] || null;

  } catch (error) {
    console.log('error update revenue-type-repository: ', error.message);
    return null;
  }
};

exports.delete = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    await DB.RevenueType.query(safeClientId)
      .delete()
      .where('id', id);

    return true;

  } catch (error) {
    console.log('error delete revenue-type-repository: ', error.message);
    return false;
  }
};
