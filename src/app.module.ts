/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-19 18:03:50
 */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [CommonModule, AuthModule],
    controllers: [AppController],
    providers: [AppService], // 提供商
})
export class AppModule {}
