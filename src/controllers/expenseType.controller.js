const expenseType = require('../services/expenseType.service');

exports.read = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
<<<<<<< HEAD
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await expenseType.read(req.body, safeClientId);
    res.json(result);
  } catch (error) {
    console.error('Error reading expense types:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
  
  res.send(await expenseType.read(req.body, safeClientId));
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;
  
<<<<<<< HEAD
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const result = await expenseType.readById(id, safeClientId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Expense type not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error reading expense type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  res.send(await expenseType.readById(id, safeClientId));
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.create = async (req, res) => {
  const clientId = req?.user?.clientId || null;
  
<<<<<<< HEAD
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  // Basic validation
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name' });
  }

  try {
    const result = await expenseType.create(req.body, safeClientId);
    if (result.error) {
      return res.status(400).json({ success: false, message: result.message });
    }
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating expense type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const data = await expenseType.create(req.body, safeClientId);

  res.send({
    data: data
  });
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL
  const clientId = req?.user?.clientId || null;
  
<<<<<<< HEAD
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  // Basic validation
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name' });
  }

  try {
    const result = await expenseType.update(id, req.body, clientId);
    if (result.error) {
      return res.status(400).json({ success: false, message: result.message });
    }
    if (!result) {
      return res.status(404).json({ success: false, message: 'Expense type not found' });
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error updating expense type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL
    const clientId = req?.user?.clientId || null;
    
    if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    await expenseType.delete(id, safeClientId);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting expense type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  if (!req.user.clientId) res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const data = await expenseType.update(id, req.body, safeClientId);

  res.send(data)
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
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

