import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProdutosTable1710749699804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'quantidade',
                    type: 'int',
                },
                {
                    name: 'preco',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos')
    }

}
