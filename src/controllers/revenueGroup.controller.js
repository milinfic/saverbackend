const revenueGroup = require('../services/revenueGroup.service');

exports.read = async (req, res) => {
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await revenueGroup.read(req.body, safeClientId);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error reading revenue groups:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await revenueGroup.readById(id, safeClientId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Revenue group not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error reading revenue group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.create = async (req, res) => {
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  // Basic validation
  const { name, color } = req.body;
  if (!name || !color) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, color' });
  }

  try {
    const result = await revenueGroup.create(req.body, safeClientId);
    if (result.error) {
      return res.status(400).json({ success: false, message: result.message });
    }
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating revenue group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  // Basic validation
  const { name, color } = req.body;
  if (!name || !color) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, color' });
  }

  try {
    const result = await revenueGroup.update(id, req.body, clientId);
    if (result.error) {
      return res.status(400).json({ success: false, message: result.message });
    }
    if (!result) {
      return res.status(404).json({ success: false, message: 'Revenue group not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error updating revenue group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    const clientId = req?.user?.clientId || null;

    if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    await revenueGroup.delete(id, safeClientId);

    res.status(200).json({ success: true, message: 'Revenue group deleted successfully' });
  } catch (error) {
    console.error('Error deleting revenue group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};