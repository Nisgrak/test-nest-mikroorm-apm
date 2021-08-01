import elasticApmNode from "elastic-apm-node";
elasticApmNode.start({
	serviceName: "test-nest-mikroorm-apm",
	serverUrl: "",
	logLevel: "trace",
	environment: "test"
});


import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {

	const app = await NestFactory.create(AppModule, { logger: ['verbose'] });

	app.use(elasticApmNode.middleware.connect())
	app.use(json({ limit: '128mb' }));
	app.use(urlencoded({ limit: '128mb', extended: true }));

	await app.listen(4000);
}

void bootstrap();
