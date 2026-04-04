const db = require('../db');

class ExpenseType {
  constructor() {
    this.baseTableName = 'expense_type';
    this.defaultData = [
      { id: 1, name: 'Fixos', /*expense_group_id: '1',*/ date: new Date() },
      { id: 2, name: 'Aluguel', /*expense_group_id: '1',*/ date: new Date() },
      { id: 3, name: 'Condomínio', /*expense_group_id: '1',*/ date: new Date() },
      { id: 4, name: 'Empréstimos', /*expense_group_id: '1',*/ date: new Date() },
      { id: 5, name: 'Internet', /*expense_group_id: '1',*/ date: new Date() },
      { id: 6, name: 'Telefone', /*expense_group_id: '1',*/ date: new Date() },
      { id: 7, name: 'Água e Luz', /*expense_group_id: '1',*/ date: new Date() },
      { id: 8, name: 'Assinaturas', /*expense_group_id: '1',*/ date: new Date() },
      { id: 9, name: 'Aleatórios', /*expense_group_id: '2',*/ date: new Date() },
      { id: 10, name: 'Supermercado', /*expense_group_id: '2',*/ date: new Date() },
      { id: 11, name: 'Lazer', /*expense_group_id: '2',*/ date: new Date() },
      { id: 12, name: 'Saúde', /*expense_group_id: '2',*/ date: new Date() },
      { id: 13, name: 'Transporte', /*expense_group_id: '2',*/ date: new Date() },
      { id: 14, name: 'Compras', /*expense_group_id: '2',*/ date: new Date() },
      { id: 15, name: 'Presentes', /*expense_group_id: '2',*/ date: new Date() },
      { id: 16, name: 'Investimentos', /*expense_group_id: '3',*/ date: new Date() },
      { id: 17, name: 'Poupança', /*expense_group_id: '3',*/ date: new Date() },
      { id: 18, name: 'Emergências', /*expense_group_id: '1',*/ date: new Date() },
      { id: 19, name: 'Roupas', /*expense_group_id: '1',*/ date: new Date() },
      { id: 20, name: 'Assinaturas Digitais', /*expense_group_id: '3',*/ date: new Date() },
      { id: 21, name: 'Educação', /*expense_group_id: '3',*/ date: new Date() },
    ];
  }

  async ensureTable(clientId) {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
    const tableName = `${this.baseTableName}_${safeClientId}`;
    const exists = await db.schema.hasTable(tableName);

    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        // table.integer('expense_group_id').nullable().index();
        table.timestamp('date').defaultTo(db.fn.now());

        // table.foreign('expense_group_id')
        //   .references('id')
        //   .inTable(`expense_group_${safeClientId}`)
        //   .onDelete('SET NULL') //CASCADE → apaga junto | RESTRICT → bloqueia exclusão | SET NULL → seta FK como null (se permitido)
        //   .onUpdate('CASCADE');
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

module.exports = new ExpenseType();