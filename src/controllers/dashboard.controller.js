const dashboardService = require('../services/dashboard.service');

exports.read = async (req, res) => {
  const clientId = req?.user?.clientId || null;

  if (!clientId) return res.status(401).json({ success: false, message: 'Client ID not found' });

  try {
    const result = await dashboardService.read(req.query, clientId);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error reading dashboard:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

