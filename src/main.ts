import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	const appPort = process.env.APP_PORT;
	app.enableCors();
	await app.listen(appPort);

	console.info(`Server started at http://localhost:${appPort}`);
}
bootstrap();
