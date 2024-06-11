import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'produtos'})
export class Produto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 110, nullable: false})
    nome: string

    @Column({length: 110, nullable: true, default: 'none'})
    categoria: string

    @Column({length: 110, nullable: true, default: 'none'})
    subcategoria: string

    @Column()
    quantidade: number

    @Column({type: 'decimal', scale: 2, precision: 10})
    preco: number

    @Column({nullable: true, default: 'undefined'})
    imagem: string
}