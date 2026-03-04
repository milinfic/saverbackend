const revenue = require('../services/dashboard.service');

exports.read = async (req, res) => {
  console.log('read dashboard...');

  res.send(await revenue.read(req.query));
};

