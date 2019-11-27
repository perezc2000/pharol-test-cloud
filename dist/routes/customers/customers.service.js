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
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CustomersService = class CustomersService {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    async createCustomer(customerDto) {
        const newCustomer = new this.customerModel(customerDto);
        return await newCustomer.save();
    }
    async getCustomers(query) {
        const customers = await this.customerModel.find(query).exec();
        return customers;
    }
    async getCustomer(id) {
        const customer = await this.customerModel.findById(id).exec();
        return customer;
    }
    async updateCustomer(id, customerDto) {
        const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, customerDto, { new: true });
        return updatedCustomer;
    }
    async deleteCustomer(id) {
        const deletedCustomer = await this.customerModel.findByIdAndDelete(id);
        return deletedCustomer;
    }
};
CustomersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Customer')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map