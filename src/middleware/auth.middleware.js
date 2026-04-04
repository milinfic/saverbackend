const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');
const accessSecret = process.env.ACCESS_TOKEN_SECRET;

exports.verifyToken = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;
  const email = req.cookies.email;

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
    // Se o token expirou, tentar refresh automático
    if (err.name === 'TokenExpiredError' && refreshToken && email) {
      console.log('Access token expired, trying automatic refresh...');

      try {
        const result = await authService.refresh(email, refreshToken);

        if (result.success) {
          console.log('Refresh successful, setting new access token');

          // Define o novo access token no cookie
          res.cookie('accessToken', result.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 900000 // 15 minutos
          });

          // Re-verifica o novo token para definir req.user
          const newPayload = jwt.verify(result.accessToken, accessSecret);
          req.user = {
            email: newPayload.email,
            clientId: newPayload.data_base
          };

          return next();
        } else {
          console.log('Refresh failed:', result.message);
        }
      } catch (refreshErr) {
        console.log('Refresh error:', refreshErr.message);
      }
    }

    return res.status(401).json({ message: 'Unauthorized: invalid token' });
  }
};