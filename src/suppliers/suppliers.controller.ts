import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './entities/supplier.entity';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly suppliersService: SuppliersService) { }

    @Post()
    create(@Body() supplier: Supplier): Promise<Supplier> {
        return this.suppliersService.create(supplier);
    }

    @Get()
    findAll(): Promise<Supplier[]> {
        return this.suppliersService.findAll();
    }

    @Get('/combo')
    comboList() {
        return this.suppliersService.comboList()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Supplier> {
        return this.suppliersService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() supplier: Supplier): Promise<Supplier> {
        return this.suppliersService.update(id, supplier);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.suppliersService.remove(id);
    }
}
