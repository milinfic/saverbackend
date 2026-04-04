const DB = require('../../models/index');

exports.read = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const expenses = await DB.Expense.query(safeClientId)
      .select([
        `expense_${safeClientId}.*`,
        `expense_type_${safeClientId}.name as type`
      ])
      .join(
        `expense_type_${safeClientId}`,
        `expense_type_${safeClientId}.id`,
        '=',
        `expense_${safeClientId}.expense_type_id`
      );
    return expenses;
  } catch (error) {
    console.error('Error reading expenses:', error);
    return [];
  }
};

exports.readById = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const expense = await DB.Expense.query(safeClientId)
      .select([
        `expense_${safeClientId}.*`,
        `expense_type_${safeClientId}.name as type`
      ])
      .join(
        `expense_type_${safeClientId}`,
        `expense_type_${safeClientId}.id`,
        '=',
        `expense_${safeClientId}.expense_type_id`
      )
      .where(`expense_${safeClientId}.id`, id)
      .first();

    return expense;
  } catch (error) {
    console.error('Error reading expense by id:', error);
    return null;
  }
};

exports.create = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const [created] = await DB.Expense.query(safeClientId)
      .insert(data)
      .returning('*');

    return created;
  } catch (error) {
    console.error('Error creating expense:', error);
    return null;
  }
};

exports.update = async (id, data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const updated = await DB.Expense.query(safeClientId)
      .update(data)
      .where('id', id)
      .returning('*');

    return updated[0] || null;
  } catch (error) {
    console.error('Error updating expense:', error);
    return null;
  }
};

exports.delete = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    await DB.Expense.query(safeClientId)
      .delete()
      .where('id', id);

    return true;
  } catch (error) {
    console.error('Error deleting expense:', error);
    return false;
  }
};