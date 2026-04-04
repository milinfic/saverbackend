const db = require('../db');

class UserModel {
  constructor() {
    this.tableName = 'users';
  }

  query() {
    return db(this.tableName);
  }
}

module.exports = new UserModel();