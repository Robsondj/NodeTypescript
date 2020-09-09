import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterLengthOfPassword1599616049140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE users ALTER COLUMN password TYPE VARCHAR(100)',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE users ALTER COLUMN password TYPE VARCHAR(50)',
        );
    }
}
