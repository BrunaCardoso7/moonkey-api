import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddQuantityCollumnVendaProduto1711240751432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('vendas_produto', new TableColumn ({
            name: 'quantidade',
            type: 'int',
            isNullable: true,
            default: 1,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('vendas_produto', 'quantidade')
    }

}
