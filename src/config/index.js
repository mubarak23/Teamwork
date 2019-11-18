const User = require('../resource/user/user');
const Article = require('../resource/article/article');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const encrypt = async (password) => {
    if(password){
        const hashed = await bcrypt.hash(password, 10);
        return hashed;
    }
    const err = 'Password field cannot be empty';
    throw err;
}

const getToken = async (userId) => {
    const token = jwt.sign({ userId }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h'} );
    return token;
}

const getUserId = async (token) => {
    //destructure and get the token first before calling this function
    const { userId } = await jwt.verify(token, `RANDOM_TOKEN_SECRET`);
    return userId;
}
