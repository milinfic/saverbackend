const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

const accessSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

const accessExpiresIn = process.env.ACCESS_TOKEN_EXPIRES_IN || '15m';
const refreshExpiresIn = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

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

exports.refresh = async (refreshToken) => {
  if (!refreshToken) return { success: false, message: 'No refresh token' };

  const decoded = this.verifyRefreshToken(refreshToken);
  if (!decoded) return { success: false, message: 'Invalid refresh token' };

  const user = userRepository.findByRefreshToken(refreshToken);
  if (!user) return { success: false, message: 'Refresh token not found' };

  const newAccessToken = this.generateAccessToken({ email: user.email });
  const newRefreshToken = this.generateRefreshToken({ email: user.email });

  // invalida o refresh antigo
  userRepository.updateRefreshToken(user.email, newRefreshToken);

  return {
    success: true,
    accessToken: newAccessToken,
    refreshToken: newRefreshToken
  };
};

exports.login = async (email, password) => {
  const user = await userRepository.findByEmail(email);

  if (!user || user.password !== password) {
    return { success: false, message: 'Invalid credentials' };
  }

  const accessToken = this.generateAccessToken({ email: user.email });
  const refreshToken = this.generateRefreshToken({ email: user.email });

  userRepository.updateRefreshToken(user.email, refreshToken);

  return { success: true, accessToken, refreshToken };
};
