import { Document } from "mongoose";

export interface Customer extends Document {
    readonly RUT: string,
    readonly RUTChilen: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly phoneNumber: Number,
    readonly gender: string,
    readonly email: string,
    readonly addresses: [string],
    readonly nAddresses: Number
}