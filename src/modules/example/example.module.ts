import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Example } from './entities/example.entity';

@Module({
	imports: [
		MikroOrmModule.forFeature(
			[
				Example
			]
		),
	],
	controllers: [
		ExampleController
	],
	providers: [
		ExampleService
	]
})
export class ExampleModule { }
