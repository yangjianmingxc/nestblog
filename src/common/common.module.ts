/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-25 17:01:29
 */
import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule } from '@nestjs/config'
import config from '../config'

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config],
        }),
    ],
    controllers: [],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class CommonModule {}
