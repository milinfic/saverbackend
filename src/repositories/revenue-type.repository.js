let revenueType = [
  { id: 1, name: 'Salário', column: 'salario', date: new Date() },
  { id: 2, name: 'Vendas On Line', column: 'online', date: new Date() },
  { id: 3, name: 'Trabalho ou Vendas Equipamento', column: 'pessoal', date: new Date() },
];

const DB = require('../../models/index');

exports.read = async (data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const type = await DB.RevenueType.query(safeClientId)
      .select('id', 'name', 'column', 'date');
    
    return type;
  } catch (err) {
    console.error('Erro ao ler revenue_type:', err);
    return [];
  }
};

exports.readById = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
    const type = await DB.RevenueType.query(safeClientId)
      .select('id', 'name', 'column', 'date')
      .where({id: id}).first();
  
    return type;
    
  } catch (error) {
    console.log('error readById revenye-type-repository: ', error.message);
    return null;
  }
};

exports.create = async (data, clientId) => {
  try {
  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const created = await DB.RevenueType.query(safeClientId)
    .insert(data);

  return created;

  } catch (error) {
    console.log('error create revenye-type-repository: ', error.message);
    return null;
  }
};

exports.update = async (id, data, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    return await DB.RevenueType.query(safeClientId)
      .update(data)
      .where('id', id);
    
  } catch (error) {
    console.log('error update revenye-type-repository: ', error.message);
    return false;
  }
};

exports.delete = async (id, clientId) => {
  try {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const deleted = await DB.RevenueType.query(safeClientId)
      .delete()
      .where('id', id);

    return deleted;
    
  } catch (error) {
    console.log('error delete revenye-type-repository: ', error.message);
    return false;
  }
  console.log('delete service...', id);

  revenueType = revenueType.filter((s) => String(s.id) !== String(id));

  return id;
};
