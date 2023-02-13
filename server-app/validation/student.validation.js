const Joi = require('joi');

const createStudentSchema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().required()
})

module.exports = { createStudentSchema };