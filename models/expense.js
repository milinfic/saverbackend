const db = require('../db');

class Expense {
  constructor() {
    this.baseTableName = 'expense';
    this.defaultData = [
      { id: 1, expense_type_id: 10, expense_group_id: '1', description: 'Compras do mês supermercado', value: 920.50, date: new Date(2026, 1, 5) },
      { id: 2, expense_type_id: 2, expense_group_id: '1', description: 'Aluguel do apartamento', value: 1800.00, date: new Date(2026, 1, 1) },
      { id: 3, expense_type_id: 13, expense_group_id: '1', description: 'Combustível', value: 580.00, date: new Date(2026, 1, 8) },
      { id: 4, expense_type_id: 8, expense_group_id: '1', description: 'Netflix', value: 39.90, date: new Date(2026, 1, 3) },
      { id: 5, expense_type_id: 12, expense_group_id: '1', description: 'Consulta médica', value: 200.00, date: new Date(2026, 0, 22) },
      { id: 6, expense_type_id: 5, expense_group_id: '1', description: 'Plano de internet fibra', value: 120.88, date: new Date(2026, 1, 10) },
      { id: 7, expense_type_id: 11, expense_group_id: '1', description: 'Jantar fora', value: 210.00, date: new Date(2026, 1, 14) },
      { id: 8, expense_type_id: 4, expense_group_id: '1', description: 'Parcela empréstimo pessoal', value: 900.50, date: new Date(2026, 1, 6) },
      { id: 9, expense_type_id: 7, expense_group_id: '1', description: 'Conta de energia elétrica', value: 295.40, date: new Date(2026, 1, 12) },
      { id: 10, expense_type_id: 16, expense_group_id: '1', description: 'Aplicação em ações', value: 1200.00, date: new Date(2026, 0, 28) },

      { id: 11, expense_type_id: 3, expense_group_id: '2', description: 'Taxa de condomínio mensal', value: 650.30, date: new Date(2026, 1, 2) },
      { id: 12, expense_type_id: 18, expense_group_id: '2', description: 'Reparo urgente no carro', value: 850.00, date: new Date(2026, 0, 18) },
      { id: 13, expense_type_id: 14, expense_group_id: '2', description: 'Compra de eletrônicos', value: 1350.00, date: new Date(2026, 0, 30) },
      { id: 14, expense_type_id: 6, expense_group_id: '2', description: 'Plano celular pós-pago', value: 89.90, date: new Date(2026, 1, 9) },
      { id: 15, expense_type_id: 9, expense_group_id: '2', description: 'Compra emergencial', value: 160.00, date: new Date(2026, 1, 11) },
      { id: 16, expense_type_id: 1, expense_group_id: '2', description: 'Seguro residencial', value: 320.00, date: new Date(2026, 0, 15) },
      { id: 17, expense_type_id: 20, expense_group_id: '2', description: 'Assinatura Adobe', value: 89.00, date: new Date(2026, 1, 4) },
      { id: 18, expense_type_id: 15, expense_group_id: '2', description: 'Presente aniversário', value: 220.00, date: new Date(2026, 0, 25) },
      { id: 19, expense_type_id: 10, expense_group_id: '2', description: 'Reposição semanal mercado', value: 310.40, date: new Date(2026, 1, 16) },
      { id: 20, expense_type_id: 12, expense_group_id: '2', description: 'Medicamentos', value: 145.00, date: new Date(2026, 1, 7) },

      { id: 21, expense_type_id: 13, expense_group_id: '3', description: 'Uber', value: 175.00, date: new Date(2026, 1, 13) },
      { id: 22, expense_type_id: 17, expense_group_id: '3', description: 'Depósito na poupança', value: 600.00, date: new Date(2026, 0, 27) },
      { id: 23, expense_type_id: 8, expense_group_id: '3', description: 'Spotify', value: 21.90, date: new Date(2026, 1, 3) },
      { id: 24, expense_type_id: 19, expense_group_id: '3', description: 'Compra de roupas', value: 420.00, date: new Date(2026, 0, 29) },
      { id: 25, expense_type_id: 11, expense_group_id: '3', description: 'Cinema', value: 75.00, date: new Date(2026, 1, 17) },
      { id: 26, expense_type_id: 4, expense_group_id: '3', description: 'Financiamento do carro', value: 1250.00, date: new Date(2026, 1, 6) },
      { id: 27, expense_type_id: 21, expense_group_id: '3', description: 'Curso online', value: 300.00, date: new Date(2026, 0, 20) },
      { id: 28, expense_type_id: 7, expense_group_id: '3', description: 'Conta de água', value: 155.00, date: new Date(2026, 1, 12) },
      { id: 29, expense_type_id: 16, expense_group_id: '3', description: 'Investimento em CDB', value: 2000.00, date: new Date(2026, 0, 26) },
      { id: 30, expense_type_id: 5, expense_group_id: '3', description: 'Upgrade internet', value: 60.00, date: new Date(2026, 1, 10) },

      { id: 31, expense_type_id: 2, expense_group_id: '4', description: 'Aluguel garagem', value: 250.00, date: new Date(2026, 1, 1) },
      { id: 32, expense_type_id: 3, expense_group_id: '4', description: 'Fundo de reserva condomínio', value: 120.00, date: new Date(2026, 1, 2) },
      { id: 33, expense_type_id: 18, expense_group_id: '4', description: 'Emergência médica familiar', value: 1100.00, date: new Date(2026, 0, 19) },
      { id: 34, expense_type_id: 14, expense_group_id: '4', description: 'Utensílios domésticos', value: 360.00, date: new Date(2026, 0, 31) },
      { id: 35, expense_type_id: 1, expense_group_id: '4', description: 'IPTU parcelado', value: 210.00, date: new Date(2026, 0, 15) },
      { id: 36, expense_type_id: 9, expense_group_id: '4', description: 'Manutenção inesperada', value: 290.00, date: new Date(2026, 1, 11) },
      { id: 37, expense_type_id: 6, expense_group_id: '4', description: 'Recarga celular', value: 40.00, date: new Date(2026, 1, 9) },
      { id: 38, expense_type_id: 15, expense_group_id: '4', description: 'Presente casamento', value: 500.00, date: new Date(2026, 0, 24) },
      { id: 39, expense_type_id: 17, expense_group_id: '4', description: 'Reserva mensal poupança', value: 700.00, date: new Date(2026, 0, 27) },
      { id: 40, expense_type_id: 11, expense_group_id: '4', description: 'Passeio fim de semana', value: 280.00, date: new Date(2026, 1, 18) },
      { id: 41, expense_type_id: 12, expense_group_id: '4', description: 'Plano de saúde', value: 750.00, date: new Date(2026, 1, 5) },
      { id: 42, expense_type_id: 20, expense_group_id: '4', description: 'Assinatura Canva Pro', value: 34.90, date: new Date(2026, 1, 4) },
    ];
  }

  async ensureTable(clientId) {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    const tableName = `${this.baseTableName}_${safeClientId}`;

    const exists = await db.schema.hasTable(tableName);

    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.integer('expense_type_id').nullable().index();
        table.integer('expense_group_id').nullable().index();
        table.string('description').notNullable();
        table.decimal('value', 10, 2).notNullable().defaultTo(0);
        table.timestamp('date').defaultTo(db.fn.now());

        table.foreign('expense_type_id')
          .references('id')
          .inTable(`expense_type_${safeClientId}`)
          .onDelete('SET NULL') //CASCADE → apaga junto | RESTRICT → bloqueia exclusão | SET NULL → seta FK como null (se permitido)
          .onUpdate('CASCADE');

        table.foreign('expense_group_id')
          .references('id')
          .inTable(`expense_group_${safeClientId}`)
          .onDelete('SET NULL') //CASCADE → apaga junto | RESTRICT → bloqueia exclusão | SET NULL → seta FK como null (se permitido)
          .onUpdate('CASCADE');
      });


      await db(tableName).insert(this.defaultData);
    }

    return tableName; // retorna o nome da tabela para usar depois
  }

  // async para retornar QueryBuilder corretamente
  query(clientId) {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
    return db(`${this.baseTableName}_${safeClientId}`);
  }
}

module.exports = new Expense();