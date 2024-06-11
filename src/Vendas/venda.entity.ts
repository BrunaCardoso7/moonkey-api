import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm'

@Entity({name: 'vendas'})
export class Venda {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'timestamp'})
    data_vendas: Date

    @Column({type: 'decimal', precision: 10, scale: 2})
    total: number
}