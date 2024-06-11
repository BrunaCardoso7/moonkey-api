import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'vendas_produto'})
export class VendaProduto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'uuid', nullable: false})
    produto_id: string

    @Column({type: 'int', nullable: false, default: 1})
    quantidade: number

    @Column({type: 'uuid', nullable: false})
    vendas_id: string
}