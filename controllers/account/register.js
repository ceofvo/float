var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require('../../db/user');

const Register = (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    console.log('User', User)

    const token = jwt.sign(
        { user_id: account._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );

    res.status(200).json({ message: "Account creation successful", data: {
        account,
        token
    } })

}

module.exports = Register;
