const revenue = require('../services/revenueType.service');

exports.read = async (req, res) => {
  console.log('read revenue. type..', req.user);

  res.send(await revenue.read(req.body));
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('readById revenue...');

  res.send(await revenue.readById(id));
};

exports.create = async (req, res) => {
  console.log('create revenue...');

  res.send({
    data: await revenue.create(req.body)
  });
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('update revenue...');

  res.send(await revenue.update(id, req.body));
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    console.log('Deleting revenue id:', id);

    // chamar o serviço que deleta do banco
    await revenue.delete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

