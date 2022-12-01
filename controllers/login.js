var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require('../db/user');
const { filterUser } = require('../services/user');

const Login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const logged_user = await User.findOne({
        where: {
            email
        }
    })

    if (!logged_user) {
        const new_user = User.build({
            firstName: 'Martins',
            lastName: 'Joseph',
            email: process.env.DEFAULT_EMAIL,
            password: await bcrypt.hash(
                process.env.DEFAULT_PASSWORD,
                parseInt(process.env.SALT_ROUNDS)
            )
        })
        await new_user.save()

        return res.status(200).json({
            message: "Login successful",
            data: {
                user: filterUser(new_user),
                token: generateToken(new_user.id)
            }
        })
    }

    const isPasswordValid = await bcrypt.compare(password, logged_user.password);
    if (!isPasswordValid)
        return res.status(400).json({ message: 'Invalid email or password' })
    
    else return res.status(200).json({
        message: "Login successful",
        data: {
            user: filterUser(logged_user),
            token: generateToken(logged_user.id)
        }
    })

}

const generateToken = (accountId) => {
    return jwt.sign(
        { user_id: accountId },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
}

module.exports = Login;
