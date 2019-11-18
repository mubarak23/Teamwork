const User = require('../resource/user/user');
const Article = require('../resource/article/article');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.encrypt =  (password) => {
    //if(password){
        //const hashed =  bcrypt.hash(password, 10);
      //  return hashed;
    //}
    //return password;
    const err = 'Password field cannot be empty';
    //throw err;
    const hashed =  bcrypt.hash(password, 10);;
    return hashed;
}

exports.getToken =  (userId) => {
    const token = jwt.sign({ userId }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h'} );
    return token;
}

exports.getUserId =  (token) => {
    //destructure and get the token first before calling this function
    const { userId } =  jwt.verify(token, `RANDOM_TOKEN_SECRET`);
    return userId;
}

exports.checkEmail =  (email) => {
    const isValidEmail = /^([a-zA-Z0-9_-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!email){
        throw `Email filed cannot be empty`;
    }    
    else if(!isValidEmail.test(email)){
        throw `Invalid Email, check and try again`;
     }else{
         return email;
     }
}
