const { validationResult } = require('express-validator');
const logger = require("../../package/logg/logger");

module.exports.validatorErrorChecker = (req, res, next) => {
  const errors = validationResult(req);
  logger.error(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: '입력하신 정보를 확인해주세요.' });
  }
  next();
};
