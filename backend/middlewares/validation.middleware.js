const {
  createProductBodyValidation,
} = require("../validators/product.validator.js");
const { handleValidationError, AppError } = require("../utils/errorHandler.js");

const validateRequestBody = (req, res, next) => {
  if (!req.body) {
    throw next(new AppError("Request body is required", 400));
  }
};

exports.validateProductBody = (req, res, next) => {
  validateRequestBody(req, res, next);

  const { error } = createProductBodyValidation(req.body);
  if (error) {
    return next(handleValidationError(error));
  }
  next();
};
