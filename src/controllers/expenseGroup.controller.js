const expenseGroupService = require('../services/expenseGroup.service');

exports.read = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  const expenses = await expenseGroupService.read(req.body, safeClientId);

  res.send(expenses);
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  const expense = await expenseGroupService.readById(id, safeClientId)

  res.send(expense);
};

exports.create = async (req, res) => {
  console.log('create expensive Type...');

  res.send({
    data: await expenseGroupService.create(req.body)
  });
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('update expensive Type...');

  res.send(await expenseGroupService.update(id, req.body));
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    console.log('Deleting expense type id:', id);

    // chamar o serviço que deleta do banco
    await expenseGroupService.delete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

