
const { checkEmail, getUserId, encrypt, getToken} = require('../../config/index');

const UserSignup =  (req, res) =>{
    const {
        firstName, lastName, password, gender,
         roleId, jobRole, email, depatment, address
    } = req.body;

    const checkEmail = await checkEmail(email);
    const hash = encrypt(password);
    const user = new User({
        email: checkEmail,
        password: hash,
        roleId,
        firstName,
        lastName,
        gender,
        jobRole,
        department,
        addess
    });
    user.save().then(
        (user) =>{
            const token = getToken(user._id);
            return res.status(200).json({
                status: 'success',
                data: {
                    message: "User Account Successfully Created",
                    userID: user._id,
                    token
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
    
