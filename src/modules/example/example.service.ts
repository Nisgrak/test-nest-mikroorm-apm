import { EntityRepository } from '@mikro-orm/sqlite';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Example } from './entities/example.entity';

@Injectable()
export class ExampleService {

	constructor(
		@InjectRepository(Example)
		public readonly repository: EntityRepository<Example>
	) { }

	async findAll() {
		console.log("Test"); // This shows in the log above
		const test = this.repository.getKnex(); // This is a raw Knex instance

		await test.schema.createTableIfNotExists("example", (t) => {
			t.increments();
			t.timestamps();
		});

		return test.from("example").select();
	}
}
