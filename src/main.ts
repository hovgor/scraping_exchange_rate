import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwagger } from './swagger/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
    cors: {
      // origin: process.env.ALLOWED_ORIGINS,
      // origin: false,
      credentials: true,
    },
  });
  useSwagger(app);
  app.enableCors();
  const port = process.env.PORT;
  const host = process.env.HOST;

  await app.listen(port, host);
  console.log(`Server is listening on http://${host}:${port}`);
}
bootstrap();
