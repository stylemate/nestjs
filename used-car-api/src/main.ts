import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
    NestFastifyApplication,
    FastifyAdapter
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: false })
    );
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true
        })
    );
    await app.listen(3000);
}
bootstrap();
