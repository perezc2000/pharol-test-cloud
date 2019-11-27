"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.CustomerSchema = new mongoose_1.Schema({
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
//# sourceMappingURL=customer.schema.js.map