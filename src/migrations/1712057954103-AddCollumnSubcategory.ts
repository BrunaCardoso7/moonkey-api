import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCollumnSubcategory1712057954103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('produtos', new TableColumn({
            name: 'subcategoria',
            type: 'varchar',
            isNullable: true,
            default: 'none'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('produtos', 'subcategoria')
    }

}
