import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Supplier {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({ name: 'name' })
    @ApiProperty()
    name: string;

    @Column({ name: 'contact_name', nullable: true })
    @ApiProperty({ required: false })
    contactName?: string;

    @Column({ name: 'contact_email', nullable: true })
    @ApiProperty({ required: false })
    contactEmail?: string;

    @Column({ name: 'contact_phone', nullable: true })
    @ApiProperty({ required: false })
    contactPhone?: string;

    @Column({ name: 'address', nullable: true })
    @ApiProperty({ required: false })
    address?: string;

    @CreateDateColumn({ name: 'created_at' })
    @ApiProperty()
    createdAt: Date;
}
