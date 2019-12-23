const jwt = require('jsonwebtoken');

require('dotenv').config();

const auth = async (req, res, next) => {
	
	try{
		
		const token =  req.headers.authorization.split(' ')[1];
		//console.log(token);
	const decodedToken = jwt.verify(token, `${process.env.RANDOM_TOKEN_SECRET}`);
	const { userID } = decodedToken;
	if(req.body.userId && req.body.userId !== userID){
		const error = 'Invalid User Id';
		//console.log(userId);
		throw error;
	}else{
		next();
		}

	}catch(error){
		
		res.status(401).json({
			'status': 'error',
			'error': 'Invalid Request !',
		})
	}
	
}

module.exports ={
	auth
}