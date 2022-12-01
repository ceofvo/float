import Joi from "joi";

export const createAccountSchema = Joi.object().keys({
    name: Joi.string()
        .required()
        .error(new Error('name is required')),
    email: Joi.string()
        .email()
        .required()
        .error(new Error('a valid email is required')),
    password: Joi.string()
        .min(6)
        .required()
        .error(new Error('password is required, minimum six characters')),
});

export const loginSchema = Joi.object().keys({
    email: Joi.string()
        .email()
        .required()
        .error(new Error('Invalid email or password')),
    password: Joi.string()
        .min(6)
        .required()
        .error(new Error('Invalid email or password')),
});

export const gifUploadSchema = Joi.object().keys({
    tags: Joi.array()
        .error(new Error('Tags must be an array'))
});

export const updateGifSchema = Joi.object().keys({
    tags: Joi.array()
        .required()
        .error(new Error('Tags must be an array')),
    name: Joi.string()
        .required()
        .error(new Error('name is required')),
});
