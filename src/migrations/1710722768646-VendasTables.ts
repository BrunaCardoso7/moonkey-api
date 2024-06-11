import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class VendasTables1710722768646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'vendas',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,    
                    isUnique: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'data_venda',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'total',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vendas')
    }
}
