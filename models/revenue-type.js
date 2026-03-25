const db = require('../db');

class RevenueType {
  constructor() {
    this.baseTableName = 'revenue_type';
    this.defaultData = [
      { id: 1, name: 'Salário', column: 'salario', date: new Date() },
      { id: 2, name: 'Vendas On Line', column: 'online', date: new Date() },
      { id: 3, name: 'Trabalho ou Vendas Equipamento', column: 'pessoal', date: new Date() },
    ];
  }

  async ensureTable(clientId) {
    const tableName = `${this.baseTableName}_${clientId}`;
    const exists = await db.schema.hasTable(tableName);

    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('column').notNullable();
        table.timestamp('date').defaultTo(db.fn.now());
      });

      await db(tableName).insert(this.defaultData);
    }

    return tableName; // retorna o nome da tabela para usar depois
  }

  // async para retornar QueryBuilder corretamente
  query(clientId) {
    return db(`${this.baseTableName}_${clientId}`);
  }
}

module.exports = new RevenueType();