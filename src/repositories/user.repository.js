const Users = [
  { email: 'paulo@hotmail.com', password: '1234', refreshToken: null },
  { email: 'carla@hotmail.com', password: '1234', refreshToken: null }
];

exports.findByEmail = (email) => {
  return Users.find(u => u.email === email) || null;
};

exports.updateRefreshToken = (email, refreshToken) => {
  const user = Users.find(u => u.email === email);
  if (user) user.refreshToken = refreshToken;
  return user;
};

exports.findByRefreshToken = (refreshToken) => {
  return Users.find(u => u.refreshToken === refreshToken) || null;
};
