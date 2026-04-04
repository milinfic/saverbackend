const expenseType = require('../services/expenseType.service');

exports.read = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  res.send(await expenseType.read(req.body, safeClientId));
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  res.send(await expenseType.readById(id, safeClientId));
};

exports.create = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const data = await expenseType.create(req.body, safeClientId);

  res.send({
    data: data
  });
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;
  
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const data = await expenseType.update(id, req.body, safeClientId);

  res.send(data)
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    const clientId = req?.user?.clientId || null;
    
    if (!req.user.clientId) res.send.json({success: false});
  
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    // chamar o serviço que deleta do banco
    await expenseType.delete(id, safeClientId);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

