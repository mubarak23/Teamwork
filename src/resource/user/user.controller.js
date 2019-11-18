const User = require('./user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                email: req.body.email,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                jobRole: req.body.jobRole,
                department: req.body.department,
                addess: req.body.addess
            });
            user.save().then(
                (user) =>{
                    const token = jwt.sign(
                        {userID: user._id},
                        'RANDOM_TOKEN_SECRET',
                        {  expiresIn: '24h'}
                    );
                    res.status(200).json({
                        status: "success",
                        data: {
                            message: "User Account Successfully Created",
                            userID: user._id,
                            //drop token here
                            token
                        }
                    })
                }
            ).catch(
                (error) => {
                    res.status(402).json({
                        status: error,
                        error: "Unable to single article"
                    });
                }
            );
        }
    );
}

exports.login = (req, res, next) =>{
    //return res.json(req.body.email);
    User.findOne({email: req.body.email}).then(
        (user) =>{
            return res.json(user);
            if(!user){
                return res.status(401).json({
                    status: error,
                    error: "Email address does not exist"
                });
            }
          bcrypt.compare(req.body.password, user.password).then(
              (vaid) => {
                  if(!vaid){
                    return res.status(401).json({
                        status: error,
                        error: "Incorrect Password"
                    });
                  }
                const token = jwt.sign(
                    {userID: user._id},
                    'RANDOM_TOKEN_SECRET',
                    {  expiresIn: '24h'}
                );
                return res.status(200).json({
                    status: "success",
                    data: {
                        token,
                        userId: user._id
                    }
                })  
              }
          ).catch(
            (error) => {
                res.status(402).json({
                    status: error,
                    error: "Invalid Password"
                });
            }
        );  
        }
    ).catch(
        (error) => {
            res.status(402).json({
                status: error,
                error: "Email does not exist on the DB"
            });
        }
    );
}