import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'User'})
export class  User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    email: string

    @Column()
    password: string
}