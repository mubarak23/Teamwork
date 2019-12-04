const jwt = require('jsonwebtoken');

require('donevn').config();

const auth = async (req, res, next) => {
	try{
		const token = await req.headers.authorization.split('')[];
	const decodedToken = jwt.verify(token, `${process.env.RANDOM_TOKEN_SECRET}`);
	const { token } = decodedToken;
	if(req.body.user_id && req.body.user_id !== userId){
		const error = 'Invalid User Id',
		throw error;
	}else{
		next();
		}

	}catch(error){
		res.status(401).json({
			'status': 'error',
			'error': 'Invalid Request !'
		})
	}
	
}

module.exports ={
	auth
}