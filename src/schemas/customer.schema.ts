import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
    RUT: String,
    RUTChilen: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    gender: String,
    email: String,
    addresses: [String],
    nAddresses: Number
});