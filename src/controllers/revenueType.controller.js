const revenue = require('../services/revenueType.service');

exports.read = async (req, res) => {

  const clientId = req?.user?.clientId || null;

<<<<<<< HEAD
  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  try {
    const revenueType = await revenue.read(req.body, safeClientId);
    res.json(revenueType);
  } catch (error) {
    console.error('Error reading revenue types:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
=======
  if (!clientId) return res.send.json({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const revenueType = await revenue.read(req.body, safeClientId)

  return res.send(revenueType);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.readById = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = req?.user?.clientId || null;

<<<<<<< HEAD
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
=======
  if (!clientId) return res.send({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const revenueType = await revenue.readById(id, safeClientId);

  return res.send(revenueType);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.create = async (req, res) => {

  const clientId = req?.user?.clientId || null;

<<<<<<< HEAD
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
=======
  if (!clientId) return res.send({success: false});

  const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

  const created = await revenue.create(req.body, safeClientId);

  res.send(created);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.update = async (req, res) => {
  const { id } = req.params; // pega o ID da URL

  const clientId = req?.user?.clientId || null;

<<<<<<< HEAD
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
=======
  if (!clientId) return res.send({success: false});

  const updated = await revenue.update(id, req.body, clientId);

  res.send(updated);
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params; // pega o ID da URL

    const clientId = req?.user?.clientId || null;
<<<<<<< HEAD

    if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

=======
    
    if (!clientId) return res.send({success: false});
    
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
    const safeClientId = String(clientId).replace(/[^a-zA-Z0-9_]/g, '');

    // chamar o serviço que deleta do banco
    await revenue.delete(id, safeClientId);

    res.status(200).json({ success: true });
  } catch (error) {
<<<<<<< HEAD
    console.error('Error deleting revenue type:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
=======
    console.error(error);
    res.status(500).json({ success: true });
>>>>>>> d9a729895c87f9c78d2c0cf207a46e16dd89756d
  }
};

