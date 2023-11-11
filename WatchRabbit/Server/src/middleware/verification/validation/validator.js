const { body } = require('express-validator');
const { validatorErrorChecker } = require('./validatorErrorChecker');

module.exports.signUp = [
    body('email').notEmpty().isEmail(),
    body('password').notEmpty(),
    validatorErrorChecker,
]