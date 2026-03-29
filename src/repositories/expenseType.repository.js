let expensiveTypes = [
  { id: 1, name: 'Fixos', group: '1', date: new Date() },
  { id: 2, name: 'Aluguel', group: '1', date: new Date() },
  { id: 3, name: 'Condomínio', group: '1', date: new Date() },
  { id: 4, name: 'Empréstimos', group: '1', date: new Date() },
  { id: 5, name: 'Internet', group: '1', date: new Date() },
  { id: 6, name: 'Telefone', group: '1', date: new Date() },
  { id: 7, name: 'Água e Luz', group: '1', date: new Date() },
  { id: 8, name: 'Assinaturas', group: '1', date: new Date() },
  { id: 9, name: 'Aleatórios', group: '2', date: new Date() },
  { id: 10, name: 'Supermercado', group: '2', date: new Date() },
  { id: 11, name: 'Lazer', group: '2', date: new Date() },
  { id: 12, name: 'Saúde', group: '2', date: new Date() },
  { id: 13, name: 'Transporte', group: '2', date: new Date() },
  { id: 14, name: 'Compras', group: '2', date: new Date() },
  { id: 15, name: 'Presentes', group: '2', date: new Date() },
  { id: 16, name: 'Investimentos', group: '3', date: new Date() },
  { id: 17, name: 'Poupança', group: '3', date: new Date() },
  { id: 18, name: 'Emergências', group: '1', date: new Date() },
  { id: 19, name: 'Roupas', group: '1', date: new Date() },
  { id: 20, name: 'Assinaturas Digitais', group: '3', date: new Date() },
  { id: 21, name: 'Educação', group: '3', date: new Date() },
];

const DB = require('../../models/index');

exports.read = async (data, clientId) => {
  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');;

  const expenseTypes = await DB.ExpenseType.query(safeClientId)
    .select([
      `expense_type_${safeClientId}.*`,
      `expense_group_${safeClientId}.name as group`
    ])
    .join(
      `expense_group_${safeClientId}`,
      `expense_group_${safeClientId}.id`,
      '=',
      `expense_type_${safeClientId}.expense_group_id`
    );

  return expenseTypes;
};

exports.readById = async (data) => {
  return expensiveTypes.find((type) => String(type.id) === data);
};

exports.create = async (data) => {
  data['date'] = new Date();
  expensiveTypes.push(data);

  return expensiveTypes;
};

exports.update = async (id, data) => {
  console.log('update service...');

  data['id'] = id;
  data['date'] = new Date();

  const index = expensiveTypes.findIndex(item => String(item.id) === String(id));
  if (index !== -1) expensiveTypes[index] = data;

  return data;
};

exports.delete = async (id) => {
  console.log('delete service...', id);

  expensiveTypes = expensiveTypes.filter((s) => String(s.id) !== String(id));

  return id;
};
