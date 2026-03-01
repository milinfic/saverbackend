let expenses = [
  { id: 1, expenseTypeId: 10, description: 'Compras do mês supermercado', value: 920.50, date: new Date(2026, 1, 5) },
  { id: 2, expenseTypeId: 2, description: 'Aluguel do apartamento', value: 1800.00, date: new Date(2026, 1, 1) },
  { id: 3, expenseTypeId: 13, description: 'Combustível', value: 580.00, date: new Date(2026, 1, 8) },
  { id: 4, expenseTypeId: 8, description: 'Netflix', value: 39.90, date: new Date(2026, 1, 3) },
  { id: 5, expenseTypeId: 12, description: 'Consulta médica', value: 200.00, date: new Date(2026, 0, 22) },
  { id: 6, expenseTypeId: 5, description: 'Plano de internet fibra', value: 120.88, date: new Date(2026, 1, 10) },
  { id: 7, expenseTypeId: 11, description: 'Jantar fora', value: 210.00, date: new Date(2026, 1, 14) },
  { id: 8, expenseTypeId: 4, description: 'Parcela empréstimo pessoal', value: 900.50, date: new Date(2026, 1, 6) },
  { id: 9, expenseTypeId: 7, description: 'Conta de energia elétrica', value: 295.40, date: new Date(2026, 1, 12) },
  { id: 10, expenseTypeId: 16, description: 'Aplicação em ações', value: 1200.00, date: new Date(2026, 0, 28) },

  { id: 11, expenseTypeId: 3, description: 'Taxa de condomínio mensal', value: 650.30, date: new Date(2026, 1, 2) },
  { id: 12, expenseTypeId: 18, description: 'Reparo urgente no carro', value: 850.00, date: new Date(2026, 0, 18) },
  { id: 13, expenseTypeId: 14, description: 'Compra de eletrônicos', value: 1350.00, date: new Date(2026, 0, 30) },
  { id: 14, expenseTypeId: 6, description: 'Plano celular pós-pago', value: 89.90, date: new Date(2026, 1, 9) },
  { id: 15, expenseTypeId: 9, description: 'Compra emergencial', value: 160.00, date: new Date(2026, 1, 11) },
  { id: 16, expenseTypeId: 1, description: 'Seguro residencial', value: 320.00, date: new Date(2026, 0, 15) },
  { id: 17, expenseTypeId: 20, description: 'Assinatura Adobe', value: 89.00, date: new Date(2026, 1, 4) },
  { id: 18, expenseTypeId: 15, description: 'Presente aniversário', value: 220.00, date: new Date(2026, 0, 25) },
  { id: 19, expenseTypeId: 10, description: 'Reposição semanal mercado', value: 310.40, date: new Date(2026, 1, 16) },
  { id: 20, expenseTypeId: 12, description: 'Medicamentos', value: 145.00, date: new Date(2026, 1, 7) },

  { id: 21, expenseTypeId: 13, description: 'Uber', value: 175.00, date: new Date(2026, 1, 13) },
  { id: 22, expenseTypeId: 17, description: 'Depósito na poupança', value: 600.00, date: new Date(2026, 0, 27) },
  { id: 23, expenseTypeId: 8, description: 'Spotify', value: 21.90, date: new Date(2026, 1, 3) },
  { id: 24, expenseTypeId: 19, description: 'Compra de roupas', value: 420.00, date: new Date(2026, 0, 29) },
  { id: 25, expenseTypeId: 11, description: 'Cinema', value: 75.00, date: new Date(2026, 1, 17) },
  { id: 26, expenseTypeId: 4, description: 'Financiamento do carro', value: 1250.00, date: new Date(2026, 1, 6) },
  { id: 27, expenseTypeId: 21, description: 'Curso online', value: 300.00, date: new Date(2026, 0, 20) },
  { id: 28, expenseTypeId: 7, description: 'Conta de água', value: 155.00, date: new Date(2026, 1, 12) },
  { id: 29, expenseTypeId: 16, description: 'Investimento em CDB', value: 2000.00, date: new Date(2026, 0, 26) },
  { id: 30, expenseTypeId: 5, description: 'Upgrade internet', value: 60.00, date: new Date(2026, 1, 10) },

  { id: 31, expenseTypeId: 2, description: 'Aluguel garagem', value: 250.00, date: new Date(2026, 1, 1) },
  { id: 32, expenseTypeId: 3, description: 'Fundo de reserva condomínio', value: 120.00, date: new Date(2026, 1, 2) },
  { id: 33, expenseTypeId: 18, description: 'Emergência médica familiar', value: 1100.00, date: new Date(2026, 0, 19) },
  { id: 34, expenseTypeId: 14, description: 'Utensílios domésticos', value: 360.00, date: new Date(2026, 0, 31) },
  { id: 35, expenseTypeId: 1, description: 'IPTU parcelado', value: 210.00, date: new Date(2026, 0, 15) },
  { id: 36, expenseTypeId: 9, description: 'Manutenção inesperada', value: 290.00, date: new Date(2026, 1, 11) },
  { id: 37, expenseTypeId: 6, description: 'Recarga celular', value: 40.00, date: new Date(2026, 1, 9) },
  { id: 38, expenseTypeId: 15, description: 'Presente casamento', value: 500.00, date: new Date(2026, 0, 24) },
  { id: 39, expenseTypeId: 17, description: 'Reserva mensal poupança', value: 700.00, date: new Date(2026, 0, 27) },
  { id: 40, expenseTypeId: 11, description: 'Passeio fim de semana', value: 280.00, date: new Date(2026, 1, 18) },
  { id: 41, expenseTypeId: 12, description: 'Plano de saúde', value: 750.00, date: new Date(2026, 1, 5) },
  { id: 42, expenseTypeId: 20, description: 'Assinatura Canva Pro', value: 34.90, date: new Date(2026, 1, 4) },
];

exports.read = async (data) => {
  return expenses;
};

exports.readById = async (data) => {
  return expenses.find((type) => String(type.id) === data);
};

exports.create = async (data) => {
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
