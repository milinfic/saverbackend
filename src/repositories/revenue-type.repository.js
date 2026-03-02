let revenueType = [
  { id: 1, name: 'Salário', column: 'salario', date: new Date() },
  { id: 2, name: 'Vendas On Line', column: 'online', date: new Date() },
  { id: 3, name: 'Trabalho ou Vendas Equipamento', column: 'pessoal', date: new Date() },
];

exports.read = async (data) => {
  return revenueType;
};

exports.readById = async (data) => {
  return revenueType.find((type) => String(type.id) === data);
};

exports.create = async (data) => {
  data['date'] = new Date();
  revenueType.push(data);

  return revenueType;
};

exports.update = async (id, data) => {
  console.log('update service...');

  data['id'] = id;
  data['date'] = new Date();

  const index = revenueType.findIndex(item => String(item.id) === String(id));
  if (index !== -1) revenueType[index] = data;

  return data;
};

exports.delete = async (id) => {
  console.log('delete service...', id);

  revenueType = revenueType.filter((s) => String(s.id) !== String(id));

  return id;
};
