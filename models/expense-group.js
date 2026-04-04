const db = require('../db');

class ExpenseGroup {
  constructor() {
    this.baseTableName = 'expense_group';
    this.defaultData = [
      { id: 1, name: 'Investimentos', color: '#1f8d0b', date: new Date(2026, 1, 5) },
      { id: 2, name: 'Fixos', color: '#adad23', date: new Date(2026, 1, 1) },
      { id: 3, name: 'Variados', color: '#ac2bb5', date: new Date(2026, 1, 8) },
      { id: 4, name: 'Poderiam ser Eliminados', color: '#bf1515', date: new Date(2026, 1, 3) },
    ];
  }

  async ensureTable(clientId) {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
    const tableName = `${this.baseTableName}_${safeClientId}`;
    const exists = await db.schema.hasTable(tableName);

    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.string('name').notNullable().defaultTo('');
        table.string('color').notNullable().defaultTo('#888');
        table.timestamp('date').defaultTo(db.fn.now()).notNullable();
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

module.exports = new ExpenseGroup();