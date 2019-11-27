import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Customer } from "@interfaces/customer.interface";
import { CustomerDto } from '@dto/customer.dto';

@Injectable()
export class CustomersService {
    constructor(
        @InjectModel('Customer') private readonly customerModel: Model<Customer>
    ) {}

    async createCustomer(customerDto: CustomerDto): Promise<Customer> {
        const newCustomer = new this.customerModel(customerDto);
        return await newCustomer.save();
    }

    async getCustomers(query: Object): Promise<Customer[]> {
        const customers = await this.customerModel.find(query).exec();
        return customers;
    }

    async getCustomer(id: string): Promise<Customer> {
        const customer = await this.customerModel.findById(id).exec();
        return customer;
    }

    async updateCustomer(id: string, customerDto: CustomerDto): Promise<Customer> {
        const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, customerDto, { new: true });
        return updatedCustomer;
    }

    async deleteCustomer(id: string): Promise<Customer> {
        const deletedCustomer = await this.customerModel.findByIdAndDelete(id);
        return deletedCustomer;
    }
}
