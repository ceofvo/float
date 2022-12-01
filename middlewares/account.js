var Joi = require("joi");
var {
	createAccountSchema,
	loginSchema
} = require("../utils/schemas.js");

exports.validateUserAccountLogin = (req, res, next) => {
	const validate = loginSchema.validate(req.body);
	if (validate.error) {
		const message = validate.error.message;
		return res.status(400).json({ message })
	}
	return next();
};
