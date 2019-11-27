"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./customers.service");
const customer_dto_1 = require("..\\..\\dto\\customer.dto");
const validate_object_id_pipes_1 = require("..\\..\\pipes\\validate-object-id.pipes");
const joi_validation_pipes_1 = require("..\\..\\pipes\\joi-validation.pipes");
const customer_joi_schema_1 = require("..\\..\\schemas\\customer.joi.schema");
let CustomersController = class CustomersController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async createCustomer(customerDto) {
        const createdCustomer = await this.customerService.createCustomer(customerDto);
        return createdCustomer;
    }
    async getCustomers(query) {
        const customers = await this.customerService.getCustomers(query);
        return customers;
    }
    async getCustomer(id) {
        const customer = await this.customerService.getCustomer(id);
        if (!customer)
            throw new common_1.NotFoundException('¡El cliente indicado no existe!');
        return customer;
    }
    async updateCustomer(customerDto, id) {
        const updatedCustomer = await this.customerService.updateCustomer(id, customerDto);
        if (!updatedCustomer)
            throw new common_1.NotFoundException('¡El cliente indicado no existe!');
        return updatedCustomer;
    }
    async deleteCustomer(id) {
        const deletedCustomer = await this.customerService.deleteCustomer(id);
        if (!deletedCustomer)
            throw new common_1.NotFoundException('¡El cliente indicado no existe!');
        return deletedCustomer;
    }
};
__decorate([
    common_1.Post(),
    common_1.UsePipes(new joi_validation_pipes_1.JoiValidationPipe(customer_joi_schema_1.CustomerJoiSchema)),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "createCustomer", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomer", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body(new joi_validation_pipes_1.JoiValidationPipe(customer_joi_schema_1.CustomerJoiSchema))),
    __param(1, common_1.Param('id', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto, String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateCustomer", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteCustomer", null);
CustomersController = __decorate([
    common_1.Controller('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map