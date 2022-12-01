var Joi = require("joi");

exports.createAccountSchema = Joi.object().keys({
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

exports.loginSchema = Joi.object().keys({
    email: Joi.string()
        .email()
        .required()
        .error(new Error('Invalid email or password')),
    password: Joi.string()
        .min(6)
        .required()
        .error(new Error('Invalid email or password')),
});
