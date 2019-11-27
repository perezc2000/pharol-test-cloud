import { CustomersService } from './customers.service';
import { Customer } from '@interfaces/customer.interface';
import { CustomerDto } from '@dto/customer.dto';
export declare class CustomersController {
    private readonly customerService;
    constructor(customerService: CustomersService);
    createCustomer(customerDto: CustomerDto): Promise<Customer>;
    getCustomers(query: any): Promise<Customer[]>;
    getCustomer(id: string): Promise<Customer>;
    updateCustomer(customerDto: CustomerDto, id: string): Promise<Customer>;
    deleteCustomer(id: string): Promise<Customer>;
}
