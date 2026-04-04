const expense = require('../services/expense.service');

exports.read = async (req, res) => {
  console.log('read expense...');

  const clientId = req?.user?.clientId || null;
  
<<<<<<< HEAD
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await expense.read(req.body, safeClientId);
    res.json(result);
  } catch (error) {
    console.error('Error reading expenses:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  res.send(await expense.read(req.body, safeClientId));
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('readById expense...');

<<<<<<< HEAD
  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await expense.readById(id, safeClientId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Expense not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error reading expense:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  res.send(await expense.readById(id));
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.create = async (req, res) => {
  console.log('create expense...');

<<<<<<< HEAD
  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  // Basic validation
  const { description, value, expense_type_id, expense_group_id } = req.body;
  if (!description || !value || !expense_type_id || !expense_group_id) {
    return res.status(400).json({ success: false, message: 'Missing required fields: description, value, expense_type_id, expense_group_id' });
  }

  if (isNaN(value) || value <= 0) {
    return res.status(400).json({ success: false, message: 'Value must be a positive number' });
  }

  try {
    const result = await expense.create(req.body, safeClientId);
    if (!result) {
      return res.status(400).json({ success: false, message: 'Failed to create expense' });
    }
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  res.send({
    data: await expense.create(req.body)
  });
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  console.log('update expense...');

<<<<<<< HEAD
  const clientId = req?.user?.clientId || null;
  
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await expense.update(id, req.body, safeClientId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Expense not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error updating expense:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  res.send(await expense.update(id, req.body));
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    console.log('Deleting expense id:', id);

<<<<<<< HEAD
    const clientId = req?.user?.clientId || null;
    
    if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    // chamar o serviço que deleta do banco
    await expense.delete(id, safeClientId);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting expense:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
=======
    // chamar o serviço que deleta do banco
    await expense.delete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true });
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  }
};

