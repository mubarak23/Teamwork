
const { checkEmail, getUserId, encrypt, getToken} = require('../../config/index');
const User = require('../user/user');
exports.UserSignup =  (req, res) =>{ 
    //return res.json(req.body);
    const {
        firstName, lastName, password, gender,
         roleId, jobRole, email, department, address
    } = req.body;
    //return res.json(password);
    const check_email =  checkEmail(email);
    const hash =  encrypt(password);
    //return res.json(hash);
    const user = new User({
        email,
        password,
        roleId,
        firstName,
        lastName,
        gender,
        jobRole,
        department,
        address
    });
    return res.json(user);
    user.save().then(
        (user) =>{
            const token = getToken(user._id);
            return res.status(200).json({
                status: 'success',
                data: {
                    message: "User Account Successfully Created",
                    userID: user._id,
                    token,
                    user
                }
            })
        }
    ).catch(
        (error) => {
            res.status(402).json({
                status: error,
                error: "Unable to Create User Account"
            });
        }
    )
}
    


