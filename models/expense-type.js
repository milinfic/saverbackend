const db = require('../db');
class ExpenseType {
  constructor() {
    this.baseTableName = 'expense_type';
    this.defaultData = [
      { id: 1, name: 'Fixos', date: new Date() },
      { id: 2, name: 'Aluguel', date: new Date() },
      { id: 3, name: 'Condomínio', date: new Date() },
      { id: 4, name: 'Empréstimos', date: new Date() },
      { id: 5, name: 'Internet', date: new Date() },
      { id: 6, name: 'Telefone', date: new Date() },
      { id: 7, name: 'Água e Luz', date: new Date() },
      { id: 8, name: 'Assinaturas', date: new Date() },
      { id: 9, name: 'Aleatórios', date: new Date() },
      { id: 10, name: 'Supermercado', date: new Date() },
      { id: 11, name: 'Lazer', date: new Date() },
      { id: 12, name: 'Saúde', date: new Date() },
      { id: 13, name: 'Transporte', date: new Date() },
      { id: 14, name: 'Compras', date: new Date() },
      { id: 15, name: 'Presentes', date: new Date() },
      { id: 16, name: 'Investimentos', date: new Date() },
      { id: 17, name: 'Poupança', date: new Date() },
      { id: 18, name: 'Emergências', date: new Date() },
      { id: 19, name: 'Roupas', date: new Date() },
      { id: 20, name: 'Assinaturas Digitais', date: new Date() },
      { id: 21, name: 'Educação', date: new Date() },
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
        table.timestamp('date').defaultTo(db.fn.now());
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