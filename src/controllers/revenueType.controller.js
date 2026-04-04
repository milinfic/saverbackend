const revenue = require('../services/revenueType.service');

exports.read = async (req, res) => {

  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const revenueType = await revenue.read(req.body, safeClientId);
    res.json(revenueType);
  } catch (error) {
    console.error('Error reading revenue types:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const revenueType = await revenue.readById(id, safeClientId);
    if (!revenueType) {
      return res.status(404).json({ success: false, message: 'Revenue type not found' });
    }
    res.json(revenueType);
  } catch (error) {
    console.error('Error reading revenue type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.create = async (req, res) => {

  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const created = await revenue.create(req.body, safeClientId);
    if (!created) {
      return res.status(400).json({ success: false, message: 'Failed to create revenue type' });
    }
    res.status(201).json({ success: true, data: created });
  } catch (error) {
    console.error('Error creating revenue type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  try {
    const updated = await revenue.update(id, req.body, clientId);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Revenue type not found' });
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating revenue type:', error);
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
    console.error('Error deleting revenue type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

