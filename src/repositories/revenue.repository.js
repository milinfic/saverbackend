let revenues = [
  { id: 1, expenseTypeId: 1, description: 'Salário', value: 920.50, date: new Date(2026, 1, 5) },
  { id: 2, expenseTypeId: 2, description: 'Venda Mercado Livre', value: 1800.00, date: new Date(2026, 1, 1) },
  { id: 3, expenseTypeId: 2, description: 'Venda Amazon', value: 580.00, date: new Date(2026, 1, 8) },
  { id: 4, expenseTypeId: 2, description: 'Manutenção Celular', value: 39.90, date: new Date(2026, 1, 3) },
  { id: 5, expenseTypeId: 1, description: 'Salário', value: 200.00, date: new Date(2026, 0, 22) },
  { id: 6, expenseTypeId: 2, description: 'Venda Mercado Livre', value: 120.88, date: new Date(2026, 1, 10) },
  { id: 7, expenseTypeId: 3, description: 'Venda Xbox 360', value: 210.00, date: new Date(2026, 1, 14) },
  { id: 8, expenseTypeId: 3, description: 'Venda Bicicleta', value: 900.50, date: new Date(2026, 1, 6) },
  { id: 9, expenseTypeId: 3, description: 'Carinho Transformers', value: 295.40, date: new Date(2026, 1, 12) },
  { id: 10, expenseTypeId: 3, description: 'Moto Elétrica', value: 1200.00, date: new Date(2026, 0, 28) },
];

const DB = require('../../models/index');

exports.read = async (data, relationalTable) => {
  try {
    return await DB.Revenue.query(relationalTable)
      .select([
        `revenue_${relationalTable}.*`,
        `revenue_type_${relationalTable}.name as revenue_type_name`
      ])
      .join(
        `revenue_type_${relationalTable}`,
        `revenue_type_${relationalTable}.id`,
        '=',
        `revenue_${relationalTable}.revenue_type_id`
      );

  } catch (error) {
    console.log('error read revenue.repository: ', error.message);
    return false;
  }
};

exports.readById = async (id, relationalTable) => {
  try {
    return await DB.Revenue.query(relationalTable)
      .select([
        `revenue_${relationalTable}.*`,
        `revenue_type_${relationalTable}.name as revenue_type_name`
      ])
      .join(
        `revenue_type_${relationalTable}`,
        `revenue_type_${relationalTable}.id`,
        '=',
        `revenue_${relationalTable}.revenue_type_id`
      )
      .where(`revenue_${relationalTable}.id`, id)
      .first();

  } catch (error) {
    console.log('error readById revenue.repository: ', error.message);
    return false;
  }
};

exports.create = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    return await DB.Revenue.query(safeClientId)
      .insert(data)

  } catch (error) {
    console.log('error create revenue.repository: ', error.message);
    return false;
  }
};

exports.update = async (id, clientId, data) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    return await DB.Revenue.query(safeClientId)
      .update(data)
      .where('id', id);

  } catch (error) {
    console.log('error update revenue.repository: ', error.message);
    return false;
  }
};

exports.delete = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    return await DB.Revenue.query(safeClientId)
      .delete()
      .where('id', id);

  } catch (error) {
    console.log('error delete revenue.repository: ', error.message);
    return false;
  }
};
