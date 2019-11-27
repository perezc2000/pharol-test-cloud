import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException, UsePipes } from '@nestjs/common';

import { CustomersService } from './customers.service';
import { Customer } from '@interfaces/customer.interface';
import { CustomerDto } from '@dto/customer.dto';
import { ValidateObjectId } from '@pipes/validate-object-id.pipes';
import { JoiValidationPipe } from '@pipes/joi-validation.pipes';
import { CustomerJoiSchema } from '@schemas/customer.joi.schema';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService: CustomersService) {}

    @Post()
    @UsePipes(new JoiValidationPipe(CustomerJoiSchema))
    async createCustomer(@Body() customerDto: CustomerDto): Promise<Customer> {
        const createdCustomer = await this.customerService.createCustomer(customerDto);
        return createdCustomer;
    }

    @Get()
    async getCustomers(
        @Query() query
    ): Promise<Customer[]> {
        const customers = await this.customerService.getCustomers(query);
        return customers;
    }

    @Get(':id')
    async getCustomer(
        @Param('id', new ValidateObjectId()) id: string
    ): Promise<Customer> {
        const customer = await this.customerService.getCustomer(id);
        if (!customer) throw new NotFoundException('¡El cliente indicado no existe!');
        return customer;
    }

    @Put(':id')
    async updateCustomer(
        @Body(new JoiValidationPipe(CustomerJoiSchema)) customerDto: CustomerDto,
        @Param('id', new ValidateObjectId()) id: string
    ): Promise<Customer> {
        const updatedCustomer = await this.customerService.updateCustomer(id, customerDto);
        if (!updatedCustomer) throw new NotFoundException('¡El cliente indicado no existe!');
        return updatedCustomer;
    }

    @Delete(':id')
    async deleteCustomer(
        @Param('id', new ValidateObjectId()) id: string
    ): Promise<Customer> {
        const deletedCustomer = await this.customerService.deleteCustomer(id);
        if (!deletedCustomer) throw new NotFoundException('¡El cliente indicado no existe!');
        return deletedCustomer;
    }
}
