const jwt = require('jsonwebtoken');
const accessSecret = process.env.ACCESS_TOKEN_SECRET;

exports.verifyToken = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: no token' });
  }

  try {
    const payload = jwt.verify(token, accessSecret);
    // Adiciona req.user automaticamente para todas rotas protegidas
    req.user = {
      email: payload.email,
      clientId: payload.data_base
    };
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: invalid token' });
  }
};