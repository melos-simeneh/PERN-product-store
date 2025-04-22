const Joi = require("joi");

exports.createProductBodyValidation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    price: Joi.number().positive().precision(2).required(),
    image: Joi.string().uri().required(),
  });

  return schema.validate(body, {
    abortEarly: false,
  });
};
