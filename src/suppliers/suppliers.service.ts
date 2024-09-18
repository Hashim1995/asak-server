import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { ISelectOption } from 'src/common/types';

@Injectable()
export class SuppliersService {
    constructor(
        @InjectRepository(Supplier)
        private suppliersRepository: Repository<Supplier>,
    ) { }

    create(supplier: Supplier): Promise<Supplier> {
        return this.suppliersRepository.save(supplier);
    }

    findAll(): Promise<Supplier[]> {
        return this.suppliersRepository.find();
    }

    findOne(id: number): Promise<Supplier> {
        return this.suppliersRepository.findOneBy({ id });
    }
    async comboList(): Promise<ISelectOption[]> {
        const all = await this.suppliersRepository.find()
        const selectList = all.map(z => ({
            value: z.id,
            label: z.contactName
        }))
        return selectList
    }

    async update(id: number, supplier: Supplier): Promise<Supplier> {
        await this.suppliersRepository.update(id, supplier);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.suppliersRepository.delete(id);
    }
}
