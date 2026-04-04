const DB = require('../../models/index');

exports.read = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const expenseTypes = await DB.ExpenseType.query(safeClientId)
<<<<<<< HEAD
      .select('*')
=======
      .select([
        `expense_type_${safeClientId}.*`,
        `expense_group_${safeClientId}.name as group`
      ])
      .join(
        `expense_group_${safeClientId}`,
        `expense_group_${safeClientId}.id`,
        '=',
        `expense_type_${safeClientId}.expense_group_id`
      )
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
      .orderBy(`expense_type_${safeClientId}.name`);
  
    return expenseTypes;
    
  } catch (error) {
    console.log(error.message);
    return {
      error: true
    }
  }

};

exports.readById = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const expenseTypes = await DB.ExpenseType.query(safeClientId)
<<<<<<< HEAD
      .select('*')
=======
      .select([
        `expense_type_${safeClientId}.*`,
        `expense_group_${safeClientId}.name as group`
      ])
      .join(
        `expense_group_${safeClientId}`,
        `expense_group_${safeClientId}.id`,
        '=',
        `expense_type_${safeClientId}.expense_group_id`
      )
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
      .where(`expense_type_${safeClientId}.id`, id)
      .first();
  
    return expenseTypes;

  } catch (error) {
    console.log(error.message);
    return {
      error: true
    }
  }

};

exports.create = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
    data['date'] = new Date();
    
    const created = await DB.ExpenseType.query(safeClientId)
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

    const updated = await DB.ExpenseType.query(safeClientId)
      .update(data)
      .where(`expense_type_${safeClientId}.id`, id);
  
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
  
    const deleted = await DB.ExpenseType.query(safeClientId)
      .delete()
      .where(`expense_type_${safeClientId}.id`, id);

    return deleted ;
  } catch (error) {
    console.log(error.message);
    return {
      error: true
    }
  }
};
