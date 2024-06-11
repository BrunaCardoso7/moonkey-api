import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCollumnsImagem1718083071723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.addColumn('produtos', new TableColumn({
                name: 'imagem',
                type: 'varchar',
                isNullable: true,
                default: 'none'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn('produtos', 'imagem')
    }

}
