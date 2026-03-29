const expenseType = require('../services/expenseType.service');

exports.read = async (req, res) => {
  console.log('read expensive Type...', req.user.clientId);

  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  res.send(await expenseType.read(req.body, safeClientId));
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('readById expensive Type...');

  res.send(await expenseType.readById(id));
};

exports.create = async (req, res) => {
  console.log('create expensive Type...');

  res.send({
    data: await expenseType.create(req.body)
  });
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('update expensive Type...');

  res.send(await expenseType.update(id, req.body));
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    console.log('Deleting expense type id:', id);

    // chamar o serviço que deleta do banco
    await expenseType.delete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

