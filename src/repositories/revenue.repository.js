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

exports.read = async (data) => {
  return revenues;
};

exports.readById = async (data) => {
  console.log(data);
  return revenues.find((type) => String(type.id) === data);
};

exports.create = async (data) => {
  const maxId = Math.max(...revenues.map(item => item.id))
  data['id'] = maxId + 1;
  data['date'] = new Date();
  revenues.push(data);

  return revenues;
};

exports.update = async (id, data) => {
  console.log('update service...');

  data['id'] = id;
  data['date'] = new Date();

  const index = revenues.findIndex(item => String(item.id) === String(id));
  if (index !== -1) revenues[index] = data;

  return data;
};

exports.delete = async (id) => {
  console.log('delete service...', id);

  revenues = revenues.filter((s) => String(s.id) !== String(id));

  return id;
};
