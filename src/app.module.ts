import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { ExampleModule } from './modules/example/example.module';
import { ConfigModule } from '@nestjs/config';
import { Example } from './modules/example/entities/example.entity';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		MikroOrmModule.forRootAsync({
			imports: [],
			inject: [],
			useFactory: () => {
				return {
					debug: ['query'],
					entities: [Example],
					type: 'sqlite',
					dbName: 'test-db.sqlite3'
				}
			}
		}),
		ExampleModule
	]
})
export class AppModule { }
