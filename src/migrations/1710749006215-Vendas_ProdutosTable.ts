import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class VendasProdutosTable1710749006215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'vendas_produto',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'produto_id',
                    type: 'uuid',
                    isNullable: false
                },
                {
                    name: 'vendas_id',
                    type: 'uuid',
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['vendas_id'],
                    referencedTableName: 'vendas',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['produto_id'],
                    referencedTableName: 'produtos',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vendas_produto');
    }
}
