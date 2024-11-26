/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-19 18:03:50
 */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ValidationPipe())
    await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
