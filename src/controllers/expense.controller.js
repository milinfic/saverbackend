const expense = require('../services/expense.service');

exports.read = async (req, res) => {
  console.log('read expense...');

  res.send(await expense.read(req.body));
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('readById expense...');

  res.send(await expense.readById(id));
};

exports.create = async (req, res) => {
  console.log('create expense...');

  res.send({
    data: await expense.create(req.body)
  });
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('update expense...');

  res.send(await expense.update(id, req.body));
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    console.log('Deleting expense id:', id);

    // chamar o serviço que deleta do banco
    await expense.delete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

