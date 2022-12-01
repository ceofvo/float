import Joi from "joi";
import {
	gifUploadSchema,
	updateGifSchema
} from "../utils/schemas.js";

export const validateGifUpload = (req, res, next) => {
	const validate = gifUploadSchema.validate(req.body);
	if (validate.error) {
		const message = validate.error.message;
		return res.status(400).json({ message })
	}
	else if (!req.files || !req.files.gif || req.files.gif.mimetype !== "image/gif") {
		return res.status(400).json({ message: "Must upload a valid gif file" })
	}
	else if ((Math.ceil(req.files.gif.size) / 1000) > 10000) {
		return res.status(400).json({ message: "Gif file must not be above 10MB" })
	}
	return next();
};

export const validateGifUpdate = (req, res, next) => {
	const validate = updateGifSchema.validate(req.body);
	if (validate.error) {
		const message = validate.error.message;
		return res.status(400).json({ message })
	}
	return next();
};
