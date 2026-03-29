const db = require('../db');

class Revenue {
  constructor() {
    this.baseTableName = 'revenue';
    this.defaultData = [
      { id: 1, revenue_type_id: 1, description: 'Salário', value: 920.50, date: new Date(2026, 1, 5) },
      { id: 2, revenue_type_id: 2, description: 'Venda Mercado Livre', value: 1800.00, date: new Date(2026, 1, 1) },
      { id: 3, revenue_type_id: 2, description: 'Venda Amazon', value: 580.00, date: new Date(2026, 1, 8) },
      { id: 4, revenue_type_id: 3, description: 'Manutenção Celular', value: 39.90, date: new Date(2026, 1, 3) },
      { id: 5, revenue_type_id: 1, description: 'Salário', value: 200.00, date: new Date(2026, 0, 22) },
      { id: 6, revenue_type_id: 2, description: 'Venda Mercado Livre', value: 120.88, date: new Date(2026, 1, 10) },
      { id: 7, revenue_type_id: 3, description: 'Venda Xbox 360', value: 210.00, date: new Date(2026, 1, 14) },
      { id: 8, revenue_type_id: 3, description: 'Venda Bicicleta', value: 900.50, date: new Date(2026, 1, 6) },
      { id: 9, revenue_type_id: 3, description: 'Carinho Transformers', value: 295.40, date: new Date(2026, 1, 12) },
      { id: 10, revenue_type_id: 3, description: 'Moto Elétrica', value: 1200.00, date: new Date(2026, 0, 28) },
    ];
  }

  async ensureTable(clientId) {
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
    const tableName = `${this.baseTableName}_${safeClientId}`;
    const exists = await db.schema.hasTable(tableName);

    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.integer('revenue_type_id').nullable().index();
        table.string('description').notNullable().defaultTo('');
        table.decimal('value', 10, 2).notNullable().defaultTo(0);
        table.timestamp('date').defaultTo(db.fn.now()).notNullable();

        table.foreign('revenue_type_id')
        .references('id')
        .inTable(`revenue_type_${safeClientId}`)
        .onDelete('SET NULL') //CASCADE → apaga junto | RESTRICT → bloqueia exclusão | SET NULL → seta FK como null (se permitido)
        .onUpdate('CASCADE');
      })

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

module.exports = new Revenue();