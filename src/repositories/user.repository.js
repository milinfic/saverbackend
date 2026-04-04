const DB = require('../../models/index');

exports.findByEmail = async (email) => {
  try {
    const result = await DB.Users.query()
    .where('email', email).first();
    
    // Neon retorna um array com os resultados
    return result || null;

  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    return null;
  }
};

exports.updateRefreshToken = async (email, refreshToken) => {
  try {
    const result = await DB.Users.query()
    .update({'refresh_token': refreshToken})
    .where('email', email);
    
    // Retorna o usuário atualizado
    return result[0] || null;

  } catch (err) {
    console.error('Erro ao atualizar refresh token:', err);
    return null;
  }
};

exports.findByRefreshToken = async (email, refreshToken) => {
  try {
    const user = await DB.Users.query()
      .where({ email, refresh_token: refreshToken })
      .first(); // retorna o objeto ou undefined

    return user || null;

  } catch (err) {
    console.error('Erro ao buscar usuário pelo refresh token:', err);
    return null;
  }
};
