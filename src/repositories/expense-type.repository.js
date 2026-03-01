let expensiveTypes = [
  { id: 1, name: 'Fixos', column: 'mensal', date: new Date() },
  { id: 2, name: 'Aluguel', column: 'mensal', date: new Date() },
  { id: 3, name: 'Condomínio', column: 'mensal', date: new Date() },
  { id: 4, name: 'Empréstimos', column: 'mensal', date: new Date() },
  { id: 5, name: 'Internet', column: 'mensal', date: new Date() },
  { id: 6, name: 'Telefone', column: 'mensal', date: new Date() },
  { id: 7, name: 'Água e Luz', column: 'mensal', date: new Date() },
  { id: 8, name: 'Assinaturas', column: 'mensal', date: new Date() },
  { id: 9, name: 'Aleatórios', column: 'variados', date: new Date() },
  { id: 10, name: 'Supermercado', column: 'variados', date: new Date() },
  { id: 11, name: 'Lazer', column: 'variados', date: new Date() },
  { id: 12, name: 'Saúde', column: 'variados', date: new Date() },
  { id: 13, name: 'Transporte', column: 'variados', date: new Date() },
  { id: 14, name: 'Compras', column: 'variados', date: new Date() },
  { id: 15, name: 'Presentes', column: 'variados', date: new Date() },
  { id: 16, name: 'Investimentos', column: 'investimentos', date: new Date() },
  { id: 17, name: 'Poupança', column: 'investimentos', date: new Date() },
  { id: 18, name: 'Emergências', column: 'variados', date: new Date() },
  { id: 19, name: 'Roupas', column: 'variados', date: new Date() },
  { id: 20, name: 'Assinaturas Digitais', column: 'variados', date: new Date() },
  { id: 21, name: 'Educação', column: 'variados', date: new Date() },
];

exports.read = async (data) => {
  return expensiveTypes;
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
