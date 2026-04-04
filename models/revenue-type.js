const db = require('../db');

class RevenueType {
  constructor() {
    this.baseTableName = 'revenue_type';
    this.defaultData = [
<<<<<<< HEAD
      { id: 1, name: 'Salário', revenue_group_id: 1, date: new Date() },
      { id: 2, name: 'Vendas On Line', revenue_group_id: 4, date: new Date() },
      { id: 3, name: 'Trabalho ou Vendas Equipamento', revenue_group_id: 3, date: new Date() },
=======
      { id: 1, name: 'Salário', column: 'salario', date: new Date() },
      { id: 2, name: 'Vendas On Line', column: 'online', date: new Date() },
      { id: 3, name: 'Trabalho ou Vendas Equipamento', column: 'pessoal', date: new Date() },
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
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
<<<<<<< HEAD
        table.integer('revenue_group_id').nullable().index();
        table.timestamp('date').defaultTo(db.fn.now());

        table.foreign('revenue_group_id')
          .references('id')
          .inTable(`revenue_group_${safeClientId}`)
          .onDelete('SET NULL')
          .onUpdate('CASCADE');
=======
        table.string('column').notNullable();
        table.timestamp('date').defaultTo(db.fn.now());
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
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

module.exports = new RevenueType();