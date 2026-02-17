const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  
  setCookies(res, result);
};

exports.refresh = async (req, res) => {

  const refreshToken = req.cookies.refreshToken;

  const result = await authService.refresh(refreshToken);

  setCookies(res, result);
};


/**
 * Define os cookies de autenticação no navegador do usuário.
 * 
 * Essa função é responsável por salvar o Access Token e o Refresh Token
 * como cookies HTTP-only, garantindo que:
 *  - O JavaScript do navegador não consiga acessar os tokens (proteção contra XSS)
 *  - Os tokens sejam enviados automaticamente nas próximas requisições
 *  - O tempo de expiração de cada token seja controlado pelo servidor
 * 
 * Access Token:
 *  - Token de curta duração (ex: 15 segundos / 15 minutos)
 *  - Usado para acessar rotas protegidas da API
 * 
 * Refresh Token:
 *  - Token de longa duração (ex: 15 segundos / 1 dia )
 *  - Usado para gerar um novo Access Token quando ele expirar
 **/
function setCookies (res, result) {
  if (result.success) {
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 15000 // 900000
    });

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 60000 // 86400000
    });

    return res.send({
      success: true,
      message: 'Login successful',
      token: result.accessToken,
      refreshToken: result.refreshToken
    });
  }

  res.status(401).send({
    success: false,
    message: result.message
  });
}


exports.logout = (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.send({ message: 'Logged out' });
};

exports.profile = (req, res) => {
  res.send({
    message: 'Access granted to protected route',
    email: req.user.email
  });
};

