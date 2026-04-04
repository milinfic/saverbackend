const expenseGroupService = require('../services/expenseGroup.service');

exports.read = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  try {
    const expenses = await expenseGroupService.read(req.body, safeClientId);
    res.json({ success: true, data: expenses });
  } catch (error) {
    console.error('Error reading expense groups:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  try {
    const expense = await expenseGroupService.readById(id, safeClientId);
    if (!expense) {
      return res.status(404).json({ success: false, message: 'Expense group not found' });
    }
    res.json({ success: true, data: expense });
  } catch (error) {
    console.error('Error reading expense group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.create = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  // Basic validation
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name' });
  }

  try {
    const result = await expenseGroupService.create(req.body, safeClientId);
    if (result.error) {
      return res.status(400).json({ success: false, message: result.message });
    }
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating expense group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  // Basic validation
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name' });
  }

  try {
    const result = await expenseGroupService.update(id, req.body, clientId);
    if (result.error) {
      return res.status(400).json({ success: false, message: result.message });
    }
    if (!result) {
      return res.status(404).json({ success: false, message: 'Expense group not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error updating expense group:', error);
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
    await expenseGroupService.delete(id, safeClientId);

    res.status(200).json({ success: true, message: 'Expense group deleted successfully' });
  } catch (error) {
    console.error('Error deleting expense group:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

