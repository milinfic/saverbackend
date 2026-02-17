const auth = require('../services/auth.service');

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  const payload = auth.verifyAccessToken(token);

  if (!payload) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  req.user = payload;
  next();
};
