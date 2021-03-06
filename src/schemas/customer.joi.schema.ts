import * as Joi from '@hapi/joi';

export const CustomerJoiSchema = Joi.object({
    _id: Joi.string(),
    RUT: Joi.string()
        .required(),
    RUTChilen: Joi.string(),
    firstName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .label('Nombre'),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .label('Apellido'),
    phoneNumber: Joi.number()
        .label('Número telefónico'),
    gender: Joi.string()
        .required()
        .label('Sexo'),
    email: Joi.string()
        .email()
        .required()
        .label('Correo electrónico'),
    addresses: Joi.array()
        .items(Joi.string())
        .label('Dirección'),
    nAddresses: Joi.number()
        .integer()
});