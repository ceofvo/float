import Joi from "joi";
import {
	createAccountSchema,
	loginSchema
} from "../utils/schemas.js";

export const validateUserAccountCreation = (req, res, next) => {
	const validate = createAccountSchema.validate(req.body);
	if (validate.error) {
		const message = validate.error.message;
		return res.status(400).json({ message })
	}
	return next();
};

export const validateUserAccountLogin = (req, res, next) => {
	const validate = loginSchema.validate(req.body);
	if (validate.error) {
		const message = validate.error.message;
		return res.status(400).json({ message })
	}
	return next();
};
