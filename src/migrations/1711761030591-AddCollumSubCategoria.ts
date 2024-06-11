import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCollumCategoria1711761030591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('produtos', new TableColumn({
            name: 'categoria',
            type: 'varchar',
            isNullable: true,
            default: 'none'
        }))
    }   

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('produtos', 'categoria')
    }
}
