import { Model } from 'mongoose';
import { Customer } from "@interfaces/customer.interface";
import { CustomerDto } from '@dto/customer.dto';
export declare class CustomersService {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
    createCustomer(customerDto: CustomerDto): Promise<Customer>;
    getCustomers(query: Object): Promise<Customer[]>;
    getCustomer(id: string): Promise<Customer>;
    updateCustomer(id: string, customerDto: CustomerDto): Promise<Customer>;
    deleteCustomer(id: string): Promise<Customer>;
}
