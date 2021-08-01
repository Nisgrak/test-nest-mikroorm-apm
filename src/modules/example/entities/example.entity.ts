import { Entity, Index, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'example' })
export class Example {

	@PrimaryKey({ length: 50, nullable: false })
	provcode: string;

	@Index({ name: 'createAt' })
	@Property({
		columnType: 'timestamp',
		fieldName: 'createAt',
		nullable: true,
		defaultRaw: `current_timestamp()`,
	})
	createAt?: Date;

	@Index({ name: 'updateAt' })
	@Property({
		columnType: 'timestamp',
		fieldName: 'updateAt',
		nullable: true,
		defaultRaw: `current_timestamp()`,
	})
	updateAt?: Date;

	constructor(provcode: string) {
		this.provcode = provcode;
	}
}
