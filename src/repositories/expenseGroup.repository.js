let expenses = [
  { id: 1, name: 'Investimentos', color: '#1f8d0b', date: new Date(2026, 1, 5) },
  { id: 2, name: 'Fixos', color: '#adad23', date: new Date(2026, 1, 1) },
  { id: 3, name: 'Variados', color: '#ac2bb5', date: new Date(2026, 1, 8) },
  { id: 4, name: 'Poderiam ser Eliminados', color: '#bf1515', date: new Date(2026, 1, 3) },
];

exports.read = async (data) => {
  return expenses;
};

exports.readById = async (data) => {
  console.log(data);
  return expenses.find((type) => String(type.id) === data);
};

exports.create = async (data) => {
  const maxId = Math.max(...expenses.map(item => item.id))
  data['id'] = maxId + 1;
  data['date'] = new Date();
  expenses.push(data);

  return expenses;
};

exports.update = async (id, data) => {
  console.log('update service...');

  data['id'] = id;
  data['date'] = new Date();

  const index = expenses.findIndex(item => String(item.id) === String(id));
  if (index !== -1) expenses[index] = data;

  return data;
};

exports.delete = async (id) => {
  console.log('delete service...', id);

  expenses = expenses.filter((s) => String(s.id) !== String(id));

  return id;
};
