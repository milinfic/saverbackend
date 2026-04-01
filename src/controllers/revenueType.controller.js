const revenue = require('../services/revenueType.service');

exports.read = async (req, res) => {

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const revenueType = await revenue.read(req.body, safeClientId)

  return res.send(revenueType);
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.send({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const revenueType = await revenue.readById(id, safeClientId);

  return res.send(revenueType);
};

exports.create = async (req, res) => {

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.send({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const created = await revenue.create(req.body, safeClientId);

  res.send(created);
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.send({success: false});

  const updated = await revenue.update(id, req.body, clientId);

  res.send(updated);
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL

    const clientId = req?.user?.clientId || null;
    
    if (!clientId) return res.send({success: false});
    
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    // chamar o serviço que deleta do banco
    await revenue.delete(id, safeClientId);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

