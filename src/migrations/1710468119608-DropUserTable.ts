import { MigrationInterface, QueryRunner } from "typeorm";

export class DropUserTable1710468119608 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "user"`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
