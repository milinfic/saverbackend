const expenseType = require('../services/expenseType.service');

exports.read = async (req, res) => {
  console.log('read expensive Type...');
  
  res.send(await expenseType.read(req.body));
};

exports.create = async (req, res) => {
  console.log('create expensive Type...');

  res.send({
    data: await expenseType.create(req.body)
  });
};

exports.update = async (req, res) => {
  console.log('update expensive Type...');  
  
  res.send(await expenseType.update(req.body));
};

exports.delete = async (req, res) => {
  console.log('delete expensive Type...');

  res.send(await expenseType.delete(req.body));
};

