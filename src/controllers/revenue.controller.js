const revenue = require('../services/revenue.service');
const utils = require('../utils/comumnsFunctions');

exports.read = async (req, res) => {

  const clientId = utils.getClientID(req, res);

  const data = await revenue.read(req.body, clientId);

  res.send(data);
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = utils.getClientID(req, res);

  const data = await revenue.readById(id, clientId);

  res.send(data);
};

exports.create = async (req, res) => {
  const clientId = utils.getClientID(req);

  if (!clientId) return res.send.json({success: false});

  const data = await revenue.create(req.body, clientId);

  res.send(data);
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = utils.getClientID(req, res);

  const data = await revenue.update(id, clientId, req.body);  

  res.send(data);
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    
    const clientId = utils.getClientID(req, res);

    // chamar o serviço que deleta do banco
    await revenue.delete(id, clientId);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
  }
};

