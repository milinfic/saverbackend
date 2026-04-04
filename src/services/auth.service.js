const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

const accessSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

const accessExpiresIn = process.env.ACCESS_TOKEN_EXPIRES_IN || '15m';
const refreshExpiresIn = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

const bcrypt = require('bcrypt');
const saltRounds = 20;

exports.generateAccessToken = (payload) => {
  return jwt.sign(payload, accessSecret, { expiresIn: accessExpiresIn });
};

exports.generateRefreshToken = (payload) => {
  return jwt.sign(payload, refreshSecret, { expiresIn: refreshExpiresIn });
};

exports.verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, accessSecret);
  } catch {
    return null;
  }
};

exports.verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, refreshSecret);
  } catch {
    return null;
  }
};

exports.refresh = async (email, refreshToken) => {
  if (!refreshToken) return { success: false, message: 'No refresh token' };

  const decoded = this.verifyRefreshToken(refreshToken);
  if (!decoded) return { success: false, message: 'Invalid refresh token' };

  const user = userRepository.findByRefreshToken(email, refreshToken);

  if (!user) return { success: false, message: 'Refresh token not found' };

  const newAccessToken = this.generateAccessToken({
    email: user.email,
    data_base: user.data_base
  });
  
  const newRefreshToken = this.generateRefreshToken({ email: user.email });

  // invalida o refresh antigo
  await userRepository.updateRefreshToken(user.email, newRefreshToken);

  return {
    success: true,
    accessToken: newAccessToken,
    refreshToken: newRefreshToken
  };
};

exports.login = async (email, password) => {
  try {
    console.log('Start login server')
    
    // Quando criar o usuário, utilizar esses dados para criptografar a senha
    // const password2 = '1234';
    // const hashedPassword = await bcrypt.hash(password2, saltRounds);
    // console.log(hashedPassword); // use esse hash no banco
    
    const user = await userRepository.findByEmail(email);
  
    if (!user) {
      throw new Error('Invalid credentials');
    }
  
    // Comparar senha com hash do banco
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('Invalid credentials')
      return { success: false, message: 'Invalid credentials' };
    }
  
    const accessToken = this.generateAccessToken({
      email: user.email,
      data_base: user.data_base
    });
    
    const refreshToken = this.generateRefreshToken({ email: user.email });
  
    // Atualizar refresh token no banco
    await userRepository.updateRefreshToken(user.email, refreshToken);
  
    return { 
      success: true,
      accessToken, refreshToken
    };
  } catch (error) {
    console.log('auth.server error login, ', error);
    return { 
      success: false, 
      message: error
    };
  }
};
