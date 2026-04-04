const revenue = require('../services/revenue.service');

exports.read = async (req, res) => {

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await revenue.read(req.body, safeClientId);
    res.json(result);
  } catch (error) {
    console.error('Error reading revenues:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await revenue.readById(id, safeClientId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Revenue not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error reading revenue:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.create = async (req, res) => {

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  // Basic validation
  const { description, value, revenue_type_id, revenue_group_id } = req.body;
  if (!description || !value || !revenue_type_id || !revenue_group_id) {
    return res.status(400).json({ success: false, message: 'Missing required fields: description, value, revenue_type_id, revenue_group_id' });
  }

  if (isNaN(value) || value <= 0) {
    return res.status(400).json({ success: false, message: 'Value must be a positive number' });
  }

  try {
    const result = await revenue.create(req.body, safeClientId);
    if (!result) {
      return res.status(400).json({ success: false, message: 'Failed to create revenue' });
    }
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating revenue:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  try {
    const result = await revenue.update(id, clientId, req.body);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Revenue not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error updating revenue:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL

    const clientId = req?.user?.clientId || null;

    if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    // chamar o serviço que deleta do banco
    await revenue.delete(id, safeClientId);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting revenue:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

